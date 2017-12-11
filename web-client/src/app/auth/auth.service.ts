import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from './login/login-form.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from './user.model';
import { RegisterForm } from './register/register-form.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private readonly authBase: string = 'auth';
  private storage: Storage = localStorage;

  constructor(private http: HttpClient, private router: Router) {}

  login(loginForm: LoginForm): Observable<User> {
    return this.http.post<User>(`${this.authBase}/login`, loginForm)
      .do(this.saveUserToStorage.bind(this));
  }

  register(registerForm: RegisterForm): Observable<User> {
    return this.http.post<User>(`${this.authBase}/register`, registerForm)
      .do(this.saveUserToStorage.bind(this));
  }

  getUser(): User {
    return JSON.parse(this.storage.getItem('user'));
  }

  logout(): void {
    this.removeUserFromStorage();
    this.router.navigate(['auth']);
  }

  checkEmailTaken(email: string): Observable<boolean> {
    return this.http.get<{ taken: boolean }>(`${this.authBase}/check-email-taken/${email}`)
      .map(response => response.taken);
  }

  private saveUserToStorage(user: User) {
    this.storage.setItem('user', JSON.stringify(user));
  }

  private removeUserFromStorage() {
    this.storage.removeItem('user');
  }
}
