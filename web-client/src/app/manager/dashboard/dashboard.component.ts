import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { Subscription } from 'rxjs/Subscription';
import { Wallet } from '../wallet.model';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe.annotation';

@Component({
  selector: 'fm-dashboard',
  template: `
    <div *ngIf="wallet" class="container-fluid py-3 px-md-5">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <fm-dashboard-charts [wallet]="wallet"></fm-dashboard-charts>
        </div>
        <div class="col-sm-12 col-md-6">
          <fm-operations-list [wallet]="wallet"></fm-operations-list>
        </div>
      </div>
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
