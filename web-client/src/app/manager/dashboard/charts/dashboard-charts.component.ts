import { Component, Input, OnChanges } from '@angular/core';
import { Wallet } from '../../wallet.model';
import { SummaryChartConfig } from './summary-chart-config.model';

@Component({
  selector: 'fm-dashboard-charts',
  template: `
    <div>
      <canvas baseChart
              [chartType]="'line'"
              [datasets]="charts.summaryChart.datasets"
              [labels]="charts.summaryChart.labels"></canvas>
    </div>
  `
})
export class DashboardChartsComponent implements OnChanges {

  @Input() wallet: Wallet;

  charts = {
    summaryChart: new SummaryChartConfig()
  };

  ngOnChanges() {
    for (let chart in this.charts) {
      this.charts[chart].recalculate(this.wallet);
    }
  }
}
