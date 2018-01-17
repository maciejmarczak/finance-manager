import { ChartConfig } from './chart-config.model';

import * as R from 'ramda';
import { reduceByDate, toDataAndLabels } from './data-utils';
import { Operation } from '../../operation.model';

export class SummaryChartConfig extends ChartConfig {

  options = {
    animation: false,
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

  recalculate(operations: Operation[]): void {

    let prev: number = 0;
    const adjustValues = R.pipe(
      R.toPairs, R.forEach((pair: [ string, number ]) =>
        prev = (pair[1] += prev)), R.fromPairs
    );

    const { data, labels } = R.pipe(
      reduceByDate,
      adjustValues,
      toDataAndLabels
    )(operations);

    this.datasets = [{ data, label: operations[0].currency }];
    this.labels = labels.map(t => new Date(t));
  }
}
