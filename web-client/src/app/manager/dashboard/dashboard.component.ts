import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { Subscription } from 'rxjs/Subscription';
import { Wallet } from '../wallet.model';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe.annotation';

@Component({
  selector: 'fm-dashboard',
  template: `
    <fm-dashboard-summary [wallet]="wallet"></fm-dashboard-summary>
    Dashboard component!
  `
})
@AutoUnsubscribe
export class DashboardComponent implements OnInit {

  wallet: Wallet;

  private sub: Subscription;

  constructor(private walletService: WalletService) {}

  ngOnInit() {
    this.sub = this.walletService.getWallet()
      .subscribe(wallet => this.wallet = wallet);
  }
}
