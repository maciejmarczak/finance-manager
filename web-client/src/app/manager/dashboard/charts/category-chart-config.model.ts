import { ChartConfig } from './chart-config.model';

import * as R from 'ramda';
import { filterExpenses, reduceByCategory, toDataAndLabels } from './data-utils';
import { Operation } from '../../operation.model';

export class CategoryChartConfig extends ChartConfig {

  options = {
    animation: false
  };

  recalculate(operations: Operation[]): void {

    const { data, labels } = R.pipe(
      filterExpenses,
      reduceByCategory,
      toDataAndLabels
    )(operations);

    this.datasets = [{ data, label: operations[0] && operations[0].currency }];
    this.labels = labels;
  }
}
