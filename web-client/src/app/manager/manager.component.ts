import { Component } from '@angular/core';

@Component({
  selector: 'fm-manager',
  template: `
    <fm-navbar></fm-navbar>
    <router-outlet></router-outlet>
  `
})
export class ManagerComponent {}
