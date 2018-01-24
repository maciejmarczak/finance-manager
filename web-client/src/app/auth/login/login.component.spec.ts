import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { By } from '@angular/platform-browser';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';

describe('Component: Login', () => {

  const mockData = {
    user: {
      id: 1,
      email: 'user@test.pl'
    },
    credentials: {
      email: 'user@test.pl',
      password: 'password'
    },
    wrongCredentials: {
      email: 'user@test.pl',
      password: 'wrong_password'
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
    fixture.detectChanges();

    const navigateSpy = spyOn(comp['router'], 'navigate');
    const loginSpy = spyOn(authService, 'login');

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

  it('should clear the form and display error message on failed login', () => {
    fixture.detectChanges();

    const loginSpy = spyOn(authService, 'login');
    const resetSpy = spyOn(comp.myForm, 'reset');

    comp.myForm.setValue(mockData.wrongCredentials);

    loginSpy.and.callFake(loginForm => {
      expect(loginForm.email).toBe(mockData.wrongCredentials.email);
      expect(loginForm.password).toBe(mockData.wrongCredentials.password);
      expect(comp.loading).toBeTruthy();

      return Observable.throw(new Error());
    });

    comp.login();

    fixture.detectChanges();

    expect(resetSpy).toHaveBeenCalled();
    expect(comp.loading).toBeFalsy();
    expect(comp.wrongCredentials).toBeTruthy();

    const alert = fixture.debugElement.query(By.css('.alert'));
    expect(alert).toBeTruthy();
  });

});
