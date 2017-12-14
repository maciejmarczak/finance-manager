import { Operation } from './operation.model';

export class Wallet {
  constructor(public operations: Operation[] = []) {}

  public getCurrencies(): string[] {
    return this.operations
      .map(op => op.currency)
      .filter((ccy, idx, arr) => arr.indexOf(ccy) === idx);
  }

  public getOperationsByCurrency(currency: string): Operation[] {
    return this.operations
      .filter(op => op.currency === currency);
  }
}
