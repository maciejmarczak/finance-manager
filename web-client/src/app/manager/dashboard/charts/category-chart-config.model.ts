import { ChartConfig } from './chart-config.model';

import * as R from 'ramda';
import { filterExpenses, reduceByCategory, toDataAndLabels } from './data-utils';
import { Operation } from '../../operation.model';

export class CategoryChartConfig extends ChartConfig {

  options = {
    animation: false
  };

  recalculate(operations: Operation[]): void {

    // As typescript compiler can't understand
    // currying, I am pulling the filtering function
    // out of the pipe.
    const expenses: Operation[] =
      filterExpenses(operations);

    const { data, labels } = R.pipe(
      reduceByCategory,
      toDataAndLabels
    )(expenses);

    this.datasets = [{ data, label: operations[0].currency }];
    this.labels = labels;
  }
}
