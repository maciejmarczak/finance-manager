import { Component, Input } from '@angular/core';
import { Wallet } from '../wallet.model';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'fm-dashboard-operations-list',
  template: `
    <h5 class="my-4">Operations List</h5>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Value</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody *ngIf="!wallet.isEmpty()">
        <tr *ngFor="let op of wallet.operations">
          <td>{{ op.date.toLocaleDateString() }}</td>
          <td>{{ op.value + ' ' + op.currency }}</td>
          <td>{{ op.category }}</td>
          <td><i (click)="deleteOperation(op.id)" class="fa fa-trash"></i></td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['dashboard-operations-list.component.scss']
})
export class DashboardOperationsListComponent {

  @Input() wallet: Wallet;

  constructor(private walletService: WalletService) {}

  deleteOperation(operationId: number): void {
    this.walletService.deleteOperation(operationId);
  }
}
