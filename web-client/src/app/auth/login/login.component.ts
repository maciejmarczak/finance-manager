import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fm-auth-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  loading: boolean = false;
  wrongCredentials: boolean = false;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    this.loading = true;

    this.authService.login(this.myForm.value).subscribe(
      () => this.onSuccessfulLogin(),
      () => this.onFailedLogin()
    );
  }

  private onSuccessfulLogin(): void {
    this.router.navigate(['/']);
  }

  private onFailedLogin(): void {
    this.myForm.reset();

    this.wrongCredentials = true;
    this.loading = false;
  }
}
