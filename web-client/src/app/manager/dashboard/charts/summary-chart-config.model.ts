import { ChartConfig } from './chart-config.model';
import { Wallet } from '../../wallet.model';

import * as R from 'ramda';
import { filterByCurrency, reduceByDate, toDataAndLabels } from './data-utils';

export class SummaryChartConfig extends ChartConfig {

  options = {
    animation: false,
    legend: false
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

    this.labels.length = 0;
    [].push.apply(this.labels, labels);
  }
}
