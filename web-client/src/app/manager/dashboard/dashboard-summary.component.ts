import { Component, Input } from '@angular/core';
import { Wallet } from '../wallet.model';
import { Operation } from '../operation.model';

interface CurrencySummary {
  currency: string;
  value: number;
}

@Component({
  selector: 'fm-dashboard-summary',
  template: `
    <div class="text-center my-5">
      <ul *ngIf="wallet && !wallet.isEmpty()" class="list-inline">
        <li 
          *ngFor="let summary of calculateSummaryPerCurrency()" 
          class="list-inline-item">
          <h4 class="mx-3">{{ summary.value + ' ' + summary.currency }}</h4>
        </li>
      </ul>
      <h4 *ngIf="wallet && wallet.isEmpty()">
        Your wallet is empty.
      </h4>
      <h4 *ngIf="!wallet">
        Loading...
      </h4>
    </div>
  `
})
export class DashboardSummaryComponent {

  @Input() wallet: Wallet;

  calculateSummaryPerCurrency(): CurrencySummary[] {
    return this.wallet.getCurrencies()
      .map(currency => this.wallet.getOperationsByCurrency(currency)
        .reduce((acc: CurrencySummary, currentVal: Operation): CurrencySummary =>
          (acc.value += currentVal.value) && acc, { currency, value: 0 }
        ));
  }
}
