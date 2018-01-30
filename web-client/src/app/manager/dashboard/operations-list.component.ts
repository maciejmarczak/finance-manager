import { Component, Input } from '@angular/core';
import { Wallet } from '../wallet.model';
import { WalletService } from '../wallet.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AddOperationComponent } from './add-operation.component';

@Component({
  selector: 'fm-operations-list',
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
        <td>{{ op.date.toISOString().split('T')[0] }}</td>
        <td>{{ op.value + ' ' + op.currency }}</td>
        <td>{{ op.category }}</td>
        <td><i (click)="deleteOperation(op.id)" class="fa fa-trash"></i></td>
      </tr>
      </tbody>
    </table>
    <button (click)="showAddOperationModal()" type="button" class="btn btn-primary pull-right">
      Add Operation
    </button>
  `,
  styleUrls: ['operations-list.component.scss']
})
export class OperationsListComponent {

  @Input() wallet: Wallet;

  constructor(private walletService: WalletService,
              private modalService: BsModalService) {}

  deleteOperation(operationId: number): void {
    this.walletService.deleteOperation(operationId);
  }

  showAddOperationModal(): void {
    const bsModalRef: BsModalRef = this.modalService.show(AddOperationComponent);

    bsModalRef.content.categories = this.wallet.getCategories();
    bsModalRef.content.currencies = this.wallet.getCurrencies();
  }
}
