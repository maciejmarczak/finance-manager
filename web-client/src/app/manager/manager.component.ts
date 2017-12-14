import { Component } from '@angular/core';
import { WalletService } from './wallet.service';

@Component({
  selector: 'fm-manager',
  template: `
    <fm-manager-navbar></fm-manager-navbar>
    <router-outlet></router-outlet>
  `
})
export class ManagerComponent {

  constructor(private walletService: WalletService) {
    this.walletService.loadWallet();
  }
}
