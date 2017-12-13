import { Component, Input } from '@angular/core';
import { Operation } from '../operation.model';

@Component({
  selector: 'fm-dashboard-summary',
  template: `
    {{ operations[0]?.value }}
  `
})
export class DashboardSummaryComponent {

  @Input() operations: Operation[];
}
