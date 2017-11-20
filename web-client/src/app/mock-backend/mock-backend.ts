import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';
import { User } from '../auth/user.model';
import { LoginForm } from '../auth/login/login-form.model';
import { HttpRequest } from '@angular/common/http';

const users: User[] = [
  { id: 1, name: 'Maciej', email: 'maciej@gmail.com' },
  { id: 2, name: 'Thomas', email: 'thomas@gmail.com' },
  { id: 3, name: 'Konrad', email: 'konrad@gmail.com' },
  { id: 4, name: 'Lukasz', email: 'lukasz@gmail.com' }
];

const password = 'passwd';
const token = 'token';

export class MockBackend implements InMemoryDbService {

  createDb() {
    return { users };
  }

  post(reqInfo: RequestInfo): Observable<any> {
    if (reqInfo.url === 'auth/login') {
      return this.postLogin(reqInfo);
    }

    return undefined;
  }

  private postLogin(reqInfo: RequestInfo): Observable<User> {
    const loginForm: LoginForm = MockBackend.getRequestBody(reqInfo);

    const user: User = users.find(user =>
      loginForm.email === user.email && loginForm.password === password);

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

  private static getRequestBody<T>(reqInfo: RequestInfo): T {
    const request: HttpRequest<T> = reqInfo.req as HttpRequest<T>;
    return request.body;
  }
}
