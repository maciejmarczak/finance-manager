import { Component } from '@angular/core';
import { OperationService } from './operation.service';

@Component({
  selector: 'fm-manager',
  template: `
    <fm-manager-navbar></fm-manager-navbar>
    <router-outlet></router-outlet>
  `
})
export class ManagerComponent {

  constructor(private operationService: OperationService) {
    this.operationService.loadOperations();
  }
}
