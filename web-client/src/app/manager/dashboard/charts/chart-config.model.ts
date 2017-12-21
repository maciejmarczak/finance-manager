export interface Dataset {
  data: number[];
  label: string;
}

export abstract class ChartConfig {
  datasets: Dataset[];
  labels: string[];

  abstract recalculate<T>(data: T);
}
