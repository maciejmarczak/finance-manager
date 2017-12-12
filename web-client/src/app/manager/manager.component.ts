import { Component } from '@angular/core';
import { ManagerService } from './manager.service';

@Component({
  selector: 'fm-manager',
  template: `
    <fm-manager-navbar></fm-manager-navbar>
    <router-outlet></router-outlet>
  `
})
export class ManagerComponent {

  constructor(private managerService: ManagerService) {}
}