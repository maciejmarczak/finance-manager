import { Component, Input, OnChanges } from '@angular/core';
import { Wallet } from '../../wallet.model';
import { SummaryChartConfig } from './summary-chart-config.model';
import { CategoryChartConfig } from './category-chart-config.model';

@Component({
  selector: 'fm-dashboard-charts',
  template: `
    <div *ngIf="!wallet.isEmpty()">
      <select
        class="form-control" [(ngModel)]="reportingCurrency"
        (ngModelChange)="recalculateCharts()">
        <option *ngFor="let ccy of wallet.getCurrencies()" [value]="ccy">
          {{ ccy }}
        </option>
      </select>
      <canvas baseChart class="my-4"
              [chartType]="'line'"
              [options]="charts.summary.options"
              [datasets]="charts.summary.datasets"
              [labels]="charts.summary.labels"></canvas>
      <canvas baseChart class="my-4"
              [chartType]="'pie'"
              [options]="charts.category.options"
              [datasets]="charts.category.datasets"
              [labels]="charts.category.labels"></canvas>
    </div>
    <h3 *ngIf="wallet.isEmpty()">The wallet is empty.</h3>
  `
})
export class DashboardChartsComponent implements OnChanges {

  @Input() wallet: Wallet;
  reportingCurrency: string = 'PLN';

  charts = {
    summary: new SummaryChartConfig(),
    category: new CategoryChartConfig()
  };

  ngOnChanges() {
    this.recalculateCharts();
  }

  recalculateCharts(): void {
    for (let chart in this.charts) {
      this.charts[chart].recalculate(
        this.wallet, this.reportingCurrency);
    }
  }
}
