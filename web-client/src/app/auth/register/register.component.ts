import {Component} from '@angular/core';
import {RegisterForm} from "./register-form.model";

@Component({
  selector: 'fm-auth-register',
  template: `
    <form (submit)="form.valid && register()" #form="ngForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" [(ngModel)]="registerForm.email" class="form-control is-invalid" id="email" required>
        <div class="invalid-feedback">Sorry, that email's taken.</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" [(ngModel)]="registerForm.password" class="form-control is-invalid" id="password" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control is-invalid" placeholder="confirm password" required>
        <div class="invalid-feedback">Passwords don't match.</div>
      </div>
      <div class="text-center">
        <button type="submit" [disabled]="!form.valid" class="btn btn-primary">Create Account</button>
      </div>
    </form>
    <div *ngIf="loading" class="overlay"><i class="fa fa-spinner rotating"></i></div>
  `
})
export class RegisterComponent {

  registerForm: RegisterForm = new RegisterForm();

  loading: boolean = false;

  register(): void {
    console.log(this.registerForm);
  }
}
