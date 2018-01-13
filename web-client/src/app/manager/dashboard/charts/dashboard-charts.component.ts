import { Component, Input, OnChanges } from '@angular/core';
import { Wallet } from '../../wallet.model';
import { SummaryChartConfig } from './summary-chart-config.model';
import { CategoryChartConfig } from './category-chart-config.model';

@Component({
  selector: 'fm-dashboard-charts',
  template: `
    <div *ngIf="!wallet.isEmpty()">
      <h5 class="my-4">Statistics</h5>
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
    <h5 *ngIf="wallet.isEmpty()">The wallet is empty.</h5>
  `
})
export class DashboardChartsComponent implements OnChanges {

  @Input() wallet: Wallet;
  reportingCurrency: string;

  charts = {
    summary: new SummaryChartConfig(),
    category: new CategoryChartConfig()
  };

  ngOnChanges() {
    this.updateReportingCurrency();
    this.recalculateCharts();
  }

  recalculateCharts(): void {
    for (let chart in this.charts) {
      this.charts[chart].recalculate(
        this.wallet, this.reportingCurrency);
    }
  }

  private updateReportingCurrency(): void {
    const currencies: string[] = this.wallet.getCurrencies();
    if (!currencies.includes(this.reportingCurrency)) {
      this.reportingCurrency = currencies[0];
    }
  }
}
