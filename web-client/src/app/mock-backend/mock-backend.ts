import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';
import { User } from '../auth/user.model';
import { LoginForm } from '../auth/login/login-form.model';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { RegisterForm } from '../auth/register/register-form.model';
import { Operation } from '../manager/operation.model';

const users: User[] = [
  { id: 1, email: 'maciej@gmail.com' },
  { id: 2, email: 'thomas@gmail.com' },
  { id: 3, email: 'konrad@gmail.com' },
  { id: 4, email: 'lukasz@gmail.com' }
];

const operations: Operation[] = [
  { id: 1, issuerId: 1, date: new Date('2017-12-10'), value: -20, currency: 'EUR', category: 'Food' },
  { id: 2, issuerId: 1, date: new Date('2018-01-11'), value: -80, currency: 'PLN', category: 'Fuel' },
  { id: 3, issuerId: 1, date: new Date('2017-12-11'), value: -30, currency: 'EUR', category: 'Food' },
  { id: 4, issuerId: 1, date: new Date('2018-01-11'), value: -30, currency: 'PLN', category: 'Food' },
  { id: 5, issuerId: 1, date: new Date('2018-01-13'), value: -70, currency: 'PLN', category: 'Fun' },
  { id: 6, issuerId: 1, date: new Date('2018-01-15'), value: -35, currency: 'PLN', category: 'Education' },
  { id: 7, issuerId: 1, date: new Date('2018-01-12'), value: 900, currency: 'PLN', category: 'Work' }
];

const passwords = {
  'default': 'passwd'
};

export class MockBackend implements InMemoryDbService {

  createDb() {
    return {};
  }

  get(reqInfo: RequestInfo): Observable<any> {
    if (reqInfo.url.startsWith('auth/check-email-taken')) {
      return this.getCheckEmailTaken(reqInfo);
    }

    if (reqInfo.url.startsWith('manager/operations')) {
      return this.getOperations(reqInfo);
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

    if (reqInfo.url === 'manager/operations') {
      return this.postOperations(reqInfo);
    }

    return undefined;
  }

  delete(reqInfo: RequestInfo): Observable<any> {
    if (reqInfo.url.startsWith('manager/operations')) {
      return this.deleteOperation(reqInfo);
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

  private getOperations(reqInfo: RequestInfo): Observable<Operation[]> {
    const headers: HttpHeaders = reqInfo.req['headers'];
    const userId: number = parseInt(headers.get('Authorization').replace('Bearer ', ''));

    return reqInfo.utils.createResponse$(() => {
      return {
        body: operations.filter(op => op.issuerId === userId),
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
      user.token = user.id.toString();
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

    users.push(user);

    passwords[registerForm.email] = registerForm.password;

    return reqInfo.utils.createResponse$(() => {
      return {
        body: {
          user: Object.assign({}, user, { token: user.id.toString() })
        },
        status: STATUS.OK
      }
    });
  }

  private postOperations(reqInfo: RequestInfo): Observable<any> {
    const operation: Operation = MockBackend.getRequestBody(reqInfo);

    operation.id = operations.length + 1;
    operations.push(operation);

    return reqInfo.utils.createResponse$(() => {
      return {
        body: operation,
        status: STATUS.OK
      }
    });
  }

  private deleteOperation(reqInfo: RequestInfo): Observable<any> {
    const opId: number = parseInt(reqInfo.url.split('/').slice(-1)[0]);
    const index: number = operations.findIndex(op => op.id === opId);

    if (index !== -1) {
      operations.splice(index, 1);
    }

    return reqInfo.utils.createResponse$(() => {
      return {
        body: {},
        status: index !== -1 ? STATUS.OK : STATUS.BAD_REQUEST
      }
    });
  }

  private static getRequestBody<T>(reqInfo: RequestInfo): T {
    const request: HttpRequest<T> = reqInfo.req as HttpRequest<T>;
    return request.body;
  }
}
