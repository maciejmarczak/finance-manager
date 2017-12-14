import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';
import { Operation } from '../operation.model';

@Component({
  selector: 'fm-dashboard',
  template: `
    <fm-dashboard-summary [operations]="operations"></fm-dashboard-summary>
    Dashboard component!
  `
})
export class DashboardComponent implements OnInit {

  operations: Operation[];

  constructor(private operationService: OperationService) {}

  ngOnInit(): void {
    this.operationService.operations$.subscribe(this.onOperationsRefresh.bind(this));
    this.operationService.loadOperations();
  }

  private onOperationsRefresh(operations: Operation[]): void {
    this.operations = operations;
  }
}
