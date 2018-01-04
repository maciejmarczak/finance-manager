import { ChartConfig } from './chart-config.model';
import { Wallet } from '../../wallet.model';

import * as R from 'ramda';
import { filterByCurrency, reduceByDate } from './data-utils';

export class SummaryChartConfig extends ChartConfig {

  options = {
    animation: false,
    legend: false
  };

  recalculate(wallet: Wallet, reportingCurrency: string): void {

    const sumValuesPerDate = R.reduce(
      (acc, curr) =>
        acc.data.push((acc.data.slice(-1)[0] || 0) + curr[1])
        && acc.labels.push(curr[0]) && acc,
      { data: [], labels: [] }
    );

    const { data, labels } = R.pipe(
      filterByCurrency(reportingCurrency),
      reduceByDate,
      R.toPairs,
      sumValuesPerDate
    )(wallet.operations);

    this.datasets = [{ data, label: reportingCurrency }];

    this.labels.length = 0;
    [].push.apply(this.labels, labels);
  }
}
