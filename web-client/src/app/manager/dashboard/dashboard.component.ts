import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
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

  constructor(private managerService: ManagerService) {}

  ngOnInit(): void {
    this.managerService.operations$.subscribe(this.onOperationsRefresh.bind(this));
    this.managerService.loadOperations();
  }

  private onOperationsRefresh(operations: Operation[]): void {
    this.operations = operations;
  }
}
