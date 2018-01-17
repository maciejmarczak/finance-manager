import { Component, Input } from '@angular/core';
import { Wallet } from '../../wallet.model';
import { SummaryChartConfig } from './summary-chart-config.model';
import { CategoryChartConfig } from './category-chart-config.model';
import { Operation } from '../../operation.model';

@Component({
  selector: 'fm-dashboard-charts',
  template: `
    <div *ngIf="!wallet.isEmpty()">
      <h5 class="my-4">Statistics</h5>
      <fm-charts-data-filters
        [wallet]="wallet"
        (filtersUpdated)="recalculateCharts($event)">
      </fm-charts-data-filters>
      <div *ngIf="filteredOperations">
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
    </div>
    <h5 *ngIf="wallet.isEmpty()">The wallet is empty.</h5>
  `
})
export class DashboardChartsComponent {

  @Input() wallet: Wallet;
  filteredOperations: Operation[];

  charts = {
    summary: new SummaryChartConfig(),
    category: new CategoryChartConfig()
  };

  recalculateCharts(operations: Operation[]): void {
    this.filteredOperations = operations;
    for (let chart in this.charts) {
      this.charts[chart].recalculate(operations);
    }
  }
}
