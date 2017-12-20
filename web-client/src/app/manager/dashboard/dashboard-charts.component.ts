import { Component, Input, OnChanges } from '@angular/core';
import { Wallet } from '../wallet.model';

@Component({
  selector: 'fm-dashboard-charts',
  template: `
    <div>
      <canvas baseChart
              [chartType]="'line'"
              [datasets]="summaryDatasets"
              [labels]="summaryLabels"></canvas>
    </div>
  `
})
export class DashboardChartsComponent implements OnChanges {

  @Input() wallet: Wallet;

  summaryDatasets;
  summaryLabels;

  ngOnChanges() {
    this.drawSummaryChart();
  }

  private drawSummaryChart(): void {

  }
}
