import {Component} from '@angular/core';
import {LoginForm} from './login-form.model';

@Component({
  selector: 'fm-auth-login',
  template: `
    <form (submit)="form.valid && login()" #form="ngForm">
      <div class="form-group">
        <input type="email" name="email" [(ngModel)]="loginForm.email" class="form-control" 
               placeholder="Email address" required>
      </div>
      <div class="form-group">
        <input type="password" name="password" [(ngModel)]="loginForm.password" class="form-control" 
               placeholder="Password" required>
      </div>
      <button type="submit" [disabled]="!form.valid" class="btn btn-primary">Login</button>
    </form>
  `,
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  loginForm: LoginForm = new LoginForm();

  login(): void {
    console.log(this.loginForm);
  }
}
