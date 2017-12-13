import { Component, Input } from '@angular/core';
import { Operation } from '../operation.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/toArray';

interface CurrencySummary {
  currency: string;
  value: number;
}

@Component({
  selector: 'fm-dashboard-summary',
  template: `
    <ul *ngIf="operations" class="list-inline">
      <li 
        *ngFor="let summary of calculateSummaryPerCurrency() | async" 
        class="list-inline-item">
            {{ summary.value + ' ' + summary.currency }}
      </li>
    </ul>
  `
})
export class DashboardSummaryComponent {

  @Input() operations: Operation[];

  calculateSummaryPerCurrency(): Observable<CurrencySummary[]> {
    return null;
  }
}
