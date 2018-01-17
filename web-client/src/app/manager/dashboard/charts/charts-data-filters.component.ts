import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Wallet } from '../../wallet.model';
import { Operation } from '../../operation.model';

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
  `
})
export class ChartsDataFiltersComponent implements OnChanges {

  @Input() wallet: Wallet;
  @Output() filtersUpdated: EventEmitter<Operation[]> = new EventEmitter<Operation[]>();

  reportingCurrency: string;

  ngOnChanges() {
    this.updateFilters();
  }

  updateFilters(): void {
    this.updateReportingCurrency();

    const filteredOperations: Operation[] = this.wallet.operations
      .filter(op => op.currency === this.reportingCurrency);

    this.filtersUpdated.emit(filteredOperations);
  }

  private updateReportingCurrency(): void {
    const currencies: string[] = this.wallet.getCurrencies();
    if (!currencies.includes(this.reportingCurrency)) {
      this.reportingCurrency = currencies[0];
    }
  }

}
