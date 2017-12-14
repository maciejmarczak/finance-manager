import { Component, Input } from '@angular/core';
import { Wallet } from '../wallet.model';

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
    return this.wallet && [];
  }
}
