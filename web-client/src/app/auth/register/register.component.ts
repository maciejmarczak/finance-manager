import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidators, PasswordValidators } from './register-form.validators';
import { Router } from '@angular/router';
import { RegisterForm } from './register-form.model';

@Component({
  selector: 'fm-auth-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  loading: boolean;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      // EMAIL INPUT
      email: [
        '', [Validators.required, Validators.email],
        EmailValidators.emailTaken(this.authService)
      ],
      // PASSWORD GROUP
      password: this.fb.group({
        val: ['', [
          Validators.required,
          Validators.minLength(5)
        ]],
        confirmVal: ''
      }, { validator: PasswordValidators.valuesMatch })
    });
  }

  register(): void {
    this.loading = true;

    const registerForm: RegisterForm = {
      email: this.myForm.value.email,
      password: this.myForm.value.password.val
    };

    this.authService.register(registerForm).subscribe(
      () => this.onSuccessfulRegister()
    );
  }

  private onSuccessfulRegister(): void {
    this.router.navigate(['/']);
  }
}
