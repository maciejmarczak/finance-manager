import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Operation } from './operation.model';
import { HttpClient } from '@angular/common/http';
import { Wallet } from './wallet.model';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class WalletService {

  private readonly operationsBaseUrl: string = 'manager/operations';
  private wallet$: Subject<Wallet>;

  constructor(private http: HttpClient) {}

  public getWallet(): Observable<Wallet> {
    return this.wallet$.asObservable();
  }

  public loadWallet(): void {
    this.wallet$ = new ReplaySubject(1);
    this.http.get<Operation[]>(this.operationsBaseUrl)
      .subscribe(operations => this.wallet$.next(new Wallet(operations)));
  }
}
