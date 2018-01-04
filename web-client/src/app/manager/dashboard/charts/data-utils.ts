import * as R from 'ramda';
import { Operation } from '../../operation.model';

export const reduceByDate = R.reduceBy(
  (acc: number, op: Operation): number => acc + op.value,
  0,
  (op: Operation): string => op.date.toLocaleDateString()
);

export const filterByCurrency = (currency: string) => R.filter(
  R.propEq('currency', currency)
);
