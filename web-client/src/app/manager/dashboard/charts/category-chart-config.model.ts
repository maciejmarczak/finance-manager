import { ChartConfig } from './chart-config.model';
import { Wallet } from '../../wallet.model';

import * as R from 'ramda';
import { filterByCurrency, reduceByCategory, toDataAndLabels } from './data-utils';
import { Operation } from '../../operation.model';

export class CategoryChartConfig extends ChartConfig {

  options = {};

  recalculate(wallet: Wallet, reportingCurrency: string): void {

    const expenses: Operation[] = R.filter(
      op => op.value < 0, wallet.operations);

    const { data, labels } = R.pipe(
      filterByCurrency(reportingCurrency),
      reduceByCategory,
      toDataAndLabels
    )(expenses);

    this.datasets = [{ data, label: reportingCurrency }];
    this.labels = labels;
  }
}
