import { ChartConfig } from './chart-config.model';
import { Wallet } from '../../wallet.model';

import * as R from 'ramda';
import { filterByCurrency, reduceByDate, toDataAndLabels } from './data-utils';

export class SummaryChartConfig extends ChartConfig {

  options = {
    legend: false,
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'day',
          unitStepSize: 1,
          displayFormats: {
            'day': 'MMM DD'
          }
        }
      }]
    }
  };

  recalculate(wallet: Wallet, reportingCurrency: string): void {

    let prev: number = 0;
    const adjustValues = R.pipe(
      R.toPairs, R.forEach((pair: [ string, number ]) =>
        prev = (pair[1] += prev)), R.fromPairs
    );

    const { data, labels } = R.pipe(
      filterByCurrency(reportingCurrency),
      reduceByDate,
      adjustValues,
      toDataAndLabels
    )(wallet.operations);

    this.datasets = [{ data, label: reportingCurrency }];
    this.labels = labels.map(t => new Date(t));
  }
}
