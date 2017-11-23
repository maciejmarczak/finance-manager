import {Component} from '@angular/core';
import {RegisterForm} from './register-form.model';
import {AuthService} from '../auth.service';

@Component({
  selector: 'fm-auth-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  registerForm: RegisterForm = new RegisterForm();
  loading: boolean = false;

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.checkEmailTaken(this.registerForm.email)
      .subscribe(isTaken => console.log('Email is taken: ' + isTaken));
  }
}
