import { Operation } from '../../operation.model';

export interface Dataset {
  data: number[];
  label: string;
}

export abstract class ChartConfig {
  datasets: Dataset[] = [];
  labels: string[] | Date[] = [];
  options = {};

  abstract recalculate(operations: Operation[]): void;
}
