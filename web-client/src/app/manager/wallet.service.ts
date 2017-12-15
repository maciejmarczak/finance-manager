import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Operation } from './operation.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Wallet } from './wallet.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WalletService {

  private readonly operationsBaseUrl: string = 'manager/operations';
  private wallet$: Subject<Wallet> = new BehaviorSubject(new Wallet());

  constructor(private http: HttpClient) {}

  public getWallet(): Observable<Wallet> {
    return this.wallet$.asObservable();
  }

  public loadWallet(): void {
    this.wallet$.next(new Wallet());

    this.http.get<Operation[]>(this.operationsBaseUrl)
      .subscribe(operations => this.wallet$.next(new Wallet(operations)));
  }
}
