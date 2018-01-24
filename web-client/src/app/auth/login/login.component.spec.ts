import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import {Observable} from "rxjs/Observable";

describe('Component: Login', () => {

  const mockData = {
    user: {
      id: 1,
      email: 'user@test.pl'
    },
    credentials: {
      email: 'user@test.pl',
      password: 'password'
    }
  };

  let fixture: ComponentFixture<LoginComponent>;
  let comp: LoginComponent;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [ AuthService ]
    });

    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
  });

  it('should navigate to "/" on successful login', () => {
    const navigateSpy = spyOn(comp['router'], 'navigate');
    const loginSpy = spyOn(authService, 'login');

    fixture.detectChanges();

    comp.myForm.setValue(mockData.credentials);

    loginSpy.and.callFake(loginForm => {
      expect(loginForm.email).toBe(mockData.credentials.email);
      expect(loginForm.password).toBe(mockData.credentials.password);
      expect(comp.loading).toBeTruthy();

      return Observable.of(mockData.user);
    });

    comp.login();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

});
