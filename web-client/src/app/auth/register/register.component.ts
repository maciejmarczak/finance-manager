import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidators, PasswordValidators } from './register-form.validators';

@Component({
  selector: 'fm-auth-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  loading: boolean = false;

  constructor(private authService: AuthService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: [
        '', [Validators.required, Validators.email],
        EmailValidators.emailTaken(this.authService)
      ],
      password: this.fb.group({
        val: ['', Validators.minLength(5)],
        confirmVal: ''
      }, { validator: PasswordValidators.valuesMatch })
    });
  }

  register(): void {
    console.log(this.myForm.value);
  }
}
