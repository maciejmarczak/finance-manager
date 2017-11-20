import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from './login/login-form.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from './user.model';

@Injectable()
export class AuthService {

  public user: User;
  private readonly authBase: string = 'auth';

  constructor(private http: HttpClient) {}

  login(loginForm: LoginForm): Observable<User> {
    return this.http.post<User>(`${this.authBase}/login`, loginForm)
      .do(user =>
        localStorage.setItem('user', JSON.stringify(this.user = user))
      );
  }
}
