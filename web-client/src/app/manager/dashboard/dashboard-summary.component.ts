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
    <ul *ngIf="wallet.operations" class="list-inline text-center">
      <li 
        *ngFor="let summary of calculateSummaryPerCurrency()" 
        class="list-inline-item">
            {{ summary.value + ' ' + summary.currency }}
      </li>
    </ul>
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
