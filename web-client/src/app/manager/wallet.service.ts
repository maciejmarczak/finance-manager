import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Operation } from './operation.model';
import { HttpClient } from '@angular/common/http';
import { Wallet } from './wallet.model';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from '../auth/auth.service';
import { environment as env } from '../../environments/environment';

@Injectable()
export class WalletService {

  private readonly operationsBaseUrl: string = `${env.restApiUrl}manager/operations`;
  private operations: Operation[];
  private wallet$: Subject<Wallet>;

  constructor(private http: HttpClient,
              private authService: AuthService) {}

  public getWallet(): Observable<Wallet> {
    return this.wallet$.asObservable();
  }

  public loadWallet(): void {
    this.wallet$ = new ReplaySubject(1);
    this.http.get<Operation[]>(this.operationsBaseUrl)
      .subscribe(this.updateState.bind(this));
  }

  public deleteOperation(operationId: number): void {
    const updatedOperations: Operation[] = this.operations
      .filter(op => op.id !== operationId);

    this.http.delete(`${this.operationsBaseUrl}/${operationId}`)
      .subscribe(() => this.updateState(updatedOperations));
  }

  public addOperation(operation: Operation): void {
    operation.issuerId = this.authService.getUser().id;

    this.http.post<Operation>(`${this.operationsBaseUrl}`, operation)
      .subscribe(savedOperation => this.updateState([ ...this.operations, savedOperation ]));
  }

  private updateState(operations: Operation[]): void {
    this.operations = operations;
    this.wallet$.next(new Wallet(operations));
  }
}
