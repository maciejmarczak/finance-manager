import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { Subscription } from 'rxjs/Subscription';
import { Wallet } from '../wallet.model';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe.annotation';

@Component({
  selector: 'fm-dashboard',
  template: `
    <div *ngIf="wallet">
      <fm-dashboard-summary [wallet]="wallet"></fm-dashboard-summary>
    </div>
    <div *ngIf="!wallet" class="overlay">
      <i class="fa fa-spinner rotating"></i>
    </div>
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
