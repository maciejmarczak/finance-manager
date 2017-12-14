import { Component, Input } from '@angular/core';
import { Operation } from '../operation.model';

interface CurrencySummary {
  currency: string;
  value: number;
}

@Component({
  selector: 'fm-dashboard-summary',
  template: `
    <ul *ngIf="operations" class="list-inline">
      <li 
        *ngFor="let summary of calculateSummaryPerCurrency()" 
        class="list-inline-item">
            {{ summary.value + ' ' + summary.currency }}
      </li>
    </ul>
  `
})
export class DashboardSummaryComponent {

  @Input() operations: Operation[];

  calculateSummaryPerCurrency(): CurrencySummary[] {
    return this.operations.reduce(
      (acc: CurrencySummary[], op: Operation) => {
        const entry = acc.find(cs => cs.currency === op.currency);

        if (entry) {
          entry.value += op.value;
        } else {
          acc.push({
            currency: op.currency,
            value: op.value
          });
        }

        return acc;
    }, []);
  }
}
