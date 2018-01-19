import * as R from 'ramda';
import * as moment from 'moment';

import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Wallet } from '../../wallet.model';
import { Operation } from '../../operation.model';
import { filterByCurrency, filterByMonth } from './data-utils';

@Component({
  selector: 'fm-charts-data-filters',
  template: `
    <select
      class="form-control" [(ngModel)]="reportingCurrency"
      (ngModelChange)="updateFilters()">
      <option *ngFor="let ccy of wallet.getCurrencies()" [value]="ccy">
        {{ ccy }}
      </option>
    </select>
    <div class="my-4 text-center">
      <div (click)="changeMonth('subtract')" class="btn btn-dark w-20">Prev</div>
      <div class="d-inline-block w-50">{{ formatReportingMonth() }}</div>
      <div (click)="changeMonth('add')" class="btn btn-dark w-20">Next</div>
    </div>
  `
})
export class ChartsDataFiltersComponent implements OnChanges {

  @Input() wallet: Wallet;
  @Output() operationsRecalculated: EventEmitter<Operation[]> = new EventEmitter();

  reportingCurrency: string;
  reportingMonth: Date = new Date();

  ngOnChanges() {
    this.resetReportingCurrency();
    this.updateFilters();
  }

  updateFilters(): void {
    const filteredOperations: Operation[] = R.pipe(
      filterByCurrency(this.reportingCurrency),
      filterByMonth(this.reportingMonth)
    )(this.wallet.operations);

    this.operationsRecalculated.emit(filteredOperations);
  }

  formatReportingMonth(): string {
    return moment(this.reportingMonth).format('MMMM YYYY');
  }

  changeMonth(action: string): void {
    this.reportingMonth = moment(this.reportingMonth)
      [action](1, 'months').toDate();

    this.updateFilters();
  }

  private resetReportingCurrency(): void {
    const currencies: string[] = this.wallet.getCurrencies();
    if (!currencies.includes(this.reportingCurrency)) {
      this.reportingCurrency = currencies[0];
    }
  }

}
