import { Operation } from './operation.model';

export class Wallet {
  constructor(public operations: Operation[] = []) {

    // On creation, sort operations array
    // by date, from oldest to newest.
    this.operations.sort(
      (a: Operation, b: Operation): number => {
        return a.date.getTime() - b.date.getTime();
      }
    );
  }

  public getCurrencies(): string[] {
    return this.operations
      .map(op => op.currency)
      .filter((ccy, idx, arr) => arr.indexOf(ccy) === idx);
  }

  public isEmpty(): boolean {
    return this.operations.length === 0;
  }
}
