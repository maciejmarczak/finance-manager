import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';
import { User } from '../auth/user.model';
import { LoginForm } from '../auth/login/login-form.model';
import { HttpRequest } from '@angular/common/http';
import { RegisterForm } from '../auth/register/register-form.model';

const users: User[] = [
  { id: 1, email: 'maciej@gmail.com' },
  { id: 2, email: 'thomas@gmail.com' },
  { id: 3, email: 'konrad@gmail.com' },
  { id: 4, email: 'lukasz@gmail.com' }
];

const passwords = {
  'default': 'passwd'
};

const token = 'token';

export class MockBackend implements InMemoryDbService {

  createDb() {
    return { users };
  }

  get(reqInfo: RequestInfo): Observable<any> {
    if (reqInfo.url.startsWith('auth/check-email-taken')) {
      return this.getCheckEmailTaken(reqInfo);
    }

    return undefined;
  }

  post(reqInfo: RequestInfo): Observable<any> {
    if (reqInfo.url === 'auth/login') {
      return this.postLogin(reqInfo);
    }

    if (reqInfo.url === 'auth/register') {
      return this.postRegister(reqInfo);
    }

    return undefined;
  }

  private getCheckEmailTaken(reqInfo: RequestInfo): Observable<{ taken: boolean }> {
    const email: string = reqInfo.url.split('/')[2];

    const taken: boolean = users.some(user =>
      user.email.toLowerCase() === email.toLowerCase());

    return reqInfo.utils.createResponse$(() => {
      return {
        body: { taken },
        status: STATUS.OK
      }
    });
  }

  private postLogin(reqInfo: RequestInfo): Observable<User> {
    const loginForm: LoginForm = MockBackend.getRequestBody(reqInfo);

    const user: User = users.find(user =>
      loginForm.email === user.email && (
        loginForm.password === passwords.default ||
        loginForm.password === passwords[loginForm.email]
      )
    );

    if (user) {
      user.token = token;
    }

    return reqInfo.utils.createResponse$(() => {
      return user ?
        {
          body: user,
          status: STATUS.OK
        } :
        {
          status: STATUS.UNAUTHORIZED
        };
    });
  }

  private postRegister(reqInfo: RequestInfo): Observable<User> {
    const registerForm: RegisterForm = MockBackend.getRequestBody(reqInfo);

    const user: User = {
      id: users.length + 1,
      email: registerForm.email
    };

    passwords[registerForm.email] = registerForm.password;

    return reqInfo.utils.createResponse$(() => {
      return {
        body: {
          user: Object.assign({}, user, { token })
        },
        status: STATUS.OK
      }
    });
  }

  private static getRequestBody<T>(reqInfo: RequestInfo): T {
    const request: HttpRequest<T> = reqInfo.req as HttpRequest<T>;
    return request.body;
  }
}
