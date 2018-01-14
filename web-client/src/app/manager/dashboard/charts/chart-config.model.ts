import { Wallet } from '../../wallet.model';

export interface Dataset {
  data: number[];
  label: string;
}

export abstract class ChartConfig {
  datasets: Dataset[] = [];
  labels: string[] | Date[] = [];
  options = {};

  abstract recalculate(wallet: Wallet,
    reportingCurrency: string): void;
}
