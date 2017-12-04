import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'fm-header',
  template: `
    <nav class="navbar navbar-light bg-light justify-content-between px-md-5">
      <a class="navbar-brand" routerLink="/">Finance Manager</a>
      <button type="button" class="btn btn-primary" (click)="logout()">Logout</button>
    </nav>
  `
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
