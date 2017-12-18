import { Component, Input, OnChanges } from '@angular/core';
import { Wallet } from '../wallet.model';

interface Dataset {
  label: string;
  data: number[];
}

@Component({
  selector: 'fm-dashboard-summary',
  template: `
    <div class="text-center my-5">
      <div *ngIf="!wallet.isEmpty()">
        <canvas baseChart style="max-width: 750px; margin: 0 auto"
                [chartType]="'line'"
                [datasets]="chartDatasets"
                [labels]="chartLabels"></canvas>
      </div>
      <h4 *ngIf="wallet.isEmpty()">
        Your wallet is empty.
      </h4>
    </div>
  `
})
export class DashboardSummaryComponent implements OnChanges {

  @Input() wallet: Wallet;

  chartDatasets: Dataset[];
  chartLabels: string[];

  ngOnChanges() {
    this.chartDatasets = this.buildChartDatasets();
    this.chartLabels = this.buildChartLabels();
  }

  private buildChartDatasets(): Dataset[] {
    return this.wallet.getCurrencies()
      .map(ccy => ({
        label: ccy,
        data: this.wallet.getOperationsByCurrency(ccy)
          .reduce((acc, curr) => {
            const lastVal = acc.pop();
            acc.push(lastVal) && acc.push(lastVal + curr.value);
            return acc;
          }, [ 0 ])
      }))
  }

  private buildChartLabels(): string[] {
    return [];
  }
}
