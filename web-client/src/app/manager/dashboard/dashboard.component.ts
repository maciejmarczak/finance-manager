import { Component, OnDestroy, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { Subscription } from 'rxjs/Subscription';
import { Wallet } from '../wallet.model';

@Component({
  selector: 'fm-dashboard',
  template: `
    <fm-dashboard-summary [wallet]="wallet"></fm-dashboard-summary>
    Dashboard component!
  `
})
export class DashboardComponent implements OnInit, OnDestroy {

  wallet: Wallet;

  private sub: Subscription;

  constructor(private walletService: WalletService) {}

  ngOnInit() {
    this.sub = this.walletService.wallet$
      .subscribe(wallet => this.wallet = wallet);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
