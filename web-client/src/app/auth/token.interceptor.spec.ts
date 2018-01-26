import { getTestBed, TestBed} from '@angular/core/testing';
import { TokenInterceptor } from './token.interceptor';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('Interceptor: Token', () => {

  const mockHttpRequest = { clone: () => {} };
  const mockHttpHandler = { handle: () => {} };

  let tokenInterceptor;
  let authService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        TokenInterceptor,
        AuthService
      ]
    });

    tokenInterceptor = getTestBed().get(TokenInterceptor);
    authService = getTestBed().get(AuthService);
  });

  it('should add authorization header if user is logged in', () => {
    spyOn(authService, 'getUser').and.returnValue({ token: 'user_token' });
    const cloneSpy = spyOn(mockHttpRequest, 'clone');

    tokenInterceptor.intercept(mockHttpRequest, mockHttpHandler);

    expect(cloneSpy).toHaveBeenCalledWith({
      setHeaders: {
        Authorization: 'Bearer user_token'
      }
    });
  });

  it('should not add authorization header if user is not logged in', () => {
    spyOn(authService, 'getUser').and.returnValue(null);
    const cloneSpy = spyOn(mockHttpRequest, 'clone');

    tokenInterceptor.intercept(mockHttpRequest, mockHttpHandler);

    expect(cloneSpy).not.toHaveBeenCalled();
  });

});
