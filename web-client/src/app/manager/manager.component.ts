import { Component } from '@angular/core';

@Component({
  selector: 'fm-manager',
  template: `
    <fm-manager-navbar></fm-manager-navbar>
    <router-outlet></router-outlet>
  `
})
export class ManagerComponent {}
