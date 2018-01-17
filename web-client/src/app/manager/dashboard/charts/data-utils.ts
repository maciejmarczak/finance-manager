import * as R from 'ramda';
import { Operation } from '../../operation.model';

export const reduceByDate = R.reduceBy(
  (acc: number, op: Operation): number => acc + op.value,
  0,
  (op: Operation): string => op.date.toDateString()
);

export const reduceByCategory = R.reduceBy(
  (acc: number, op: Operation): number => acc + Math.abs(op.value),
  0,
  (op: Operation): string => op.category
);

export const filterExpenses = R.filter(
  (op: Operation): boolean => op.value < 0
);

export const toDataAndLabels = R.pipe(
  R.toPairs,
  R.reduce(
    (acc, pair) => ({
      data: [ ...acc.data, pair[1] ],
      labels: [ ...acc.labels, pair[0] ]
    }),
    { data: [], labels: [] }
  )
);
