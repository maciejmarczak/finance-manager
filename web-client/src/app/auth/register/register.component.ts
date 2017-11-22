import {Component} from '@angular/core';
import {RegisterForm} from "./register-form.model";

@Component({
  selector: 'fm-auth-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  registerForm: RegisterForm = new RegisterForm();

  loading: boolean = false;

  register(): void {
    console.log(this.registerForm);
  }
}
