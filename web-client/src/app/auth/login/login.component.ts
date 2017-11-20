import {Component} from '@angular/core';
import {LoginForm} from './login-form.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fm-auth-login',
  template: `
    <form (submit)="form.valid && login()" #form="ngForm">
      <div class="form-group">
        <input type="email" name="email" [(ngModel)]="loginForm.email" class="form-control" 
               placeholder="email" autocomplete="off" required>
      </div>
      <div class="form-group">
        <input type="password" name="password" [(ngModel)]="loginForm.password" class="form-control" 
               placeholder="password" required>
      </div>
      <div *ngIf="wrongCredentials" class="alert alert-danger" role="alert">
        <strong>Oops!</strong> Wrong credentials.
      </div>
      <button type="submit" [disabled]="!form.valid" class="btn btn-primary">Login</button>
    </form>
    <div *ngIf="loading" class="spinner"><i class="fa fa-spinner rotating"></i></div>
  `,
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  loginForm: LoginForm = new LoginForm();

  loading: boolean = false;
  wrongCredentials: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) {}

  login(): void {
    this.loading = true;

    this.authService.login(this.loginForm).subscribe(
      () => this.onSuccessfulLogin(),
      () => this.onFailedLogin()
    );
  }

  private onSuccessfulLogin(): void {
    this.router.navigate(['/']);
  }

  private onFailedLogin(): void {
    this.loginForm.resetPassword();
    this.wrongCredentials = true;
    this.loading = false;
  }
}
