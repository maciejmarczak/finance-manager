import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from './login/login-form.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from './user.model';
import { RegisterForm } from './register/register-form.model';

@Injectable()
export class AuthService {

  public user: User;
  private readonly authBase: string = 'auth';

  constructor(private http: HttpClient) {}

  login(loginForm: LoginForm): Observable<User> {
    return this.http.post<User>(`${this.authBase}/login`, loginForm)
      .do(this.saveUserToStorage(localStorage));
  }

  register(registerForm: RegisterForm): Observable<User> {
    return this.http.post<User>(`${this.authBase}/register`, registerForm)
      .do(this.saveUserToStorage(localStorage));
  }

  checkEmailTaken(email: string): Observable<boolean> {
    return this.http.get<{ taken: boolean }>(`${this.authBase}/check-email-taken/${email}`)
      .map(response => response.taken);
  }

  private saveUserToStorage(storage: Storage) {
    const self = this;
    return function(user: User) {
      storage.setItem('user', JSON.stringify(self.user = user));
    }
  }
}
