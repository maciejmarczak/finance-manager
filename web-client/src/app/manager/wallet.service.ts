import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Operation } from './operation.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Wallet } from './wallet.model';

@Injectable()
export class WalletService {

  public wallet$: Subject<Wallet> = new BehaviorSubject(new Wallet());

  private readonly operationsBaseUrl: string = 'manager/operations';

  constructor(private http: HttpClient) {}

  public loadWallet(): void {
    this.wallet$.next(new Wallet());

    this.http.get<Operation[]>(this.operationsBaseUrl)
      .subscribe(operations => this.wallet$.next(new Wallet(operations)));
  }
}
