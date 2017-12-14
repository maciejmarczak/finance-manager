import { Component, OnInit, OnDestroy } from '@angular/core';
import { OperationService } from '../operation.service';
import { Operation } from '../operation.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'fm-dashboard',
  template: `
    <fm-dashboard-summary [operations]="operations"></fm-dashboard-summary>
    Dashboard component!
  `
})
export class DashboardComponent implements OnInit, OnDestroy {

  operations: Operation[];
  private sub: Subscription;

  constructor(private operationService: OperationService) {}

  ngOnInit() {
    this.sub = this.operationService.operations$
      .subscribe(this.onOperationsRefresh.bind(this));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private onOperationsRefresh(operations: Operation[]): void {
    this.operations = operations;
  }
}
