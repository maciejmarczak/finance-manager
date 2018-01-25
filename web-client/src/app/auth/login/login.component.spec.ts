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

  it('should initialize the form on component creation', () => {
    expect(comp.myForm).toBeFalsy();
    fixture.detectChanges();

    expect(comp.myForm.controls.email).toBeTruthy();
    expect(comp.myForm.controls.password).toBeTruthy();
  });

  it('should have loading set to true during the async login call', () => {
    fixture.detectChanges();

    spyOn(authService, 'login').and.callFake(() => {
      expect(comp.loading).toBeTruthy();
      return Observable.of({});
    });

    expect(comp.loading).toBeFalsy();
    comp.login();
    expect(comp.loading).toBeFalsy();
  });

  it('should navigate to "/" on successful login', () => {
    fixture.detectChanges();

    const navigateSpy = spyOn(comp['router'], 'navigate');
    spyOn(authService, 'login').and.callFake(() => Observable.of({}));

    comp.login();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  it('should pass user supplied values to authService.login', () => {
    fixture.detectChanges();

    const credentials = {
      email: 'user@test.pl',
      password: 'password'
    };

    const emailInput = getFormInput('input[type=email]');
    const passwordInput = getFormInput('input[type=password]');

    emailInput.value = credentials.email;
    passwordInput.value = credentials.password;

    emailInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    spyOn(authService, 'login').and.callFake(loginForm => {
      expect(loginForm.email).toBe(credentials.email);
      expect(loginForm.password).toBe(credentials.password);

      return Observable.of({});
    });

    comp.login();
  });

  it('should set wrongCredentials to true on failed login', () => {
    fixture.detectChanges();

    spyOn(authService, 'login').and.returnValue(Observable.throw(new Error()));

    expect(comp.wrongCredentials).toBeFalsy();
    comp.login();
    expect(comp.wrongCredentials).toBeTruthy();
  });

  it('should reset the form on failed login', () => {
    fixture.detectChanges();

    const resetSpy = spyOn(comp.myForm, 'reset');
    spyOn(authService, 'login').and.returnValue(Observable.throw(new Error()));

    comp.login();
    expect(resetSpy).toHaveBeenCalled();
  });

  function getFormInput(selector) {
    return fixture.debugElement.query(By.css(selector)).nativeElement;
  }

});
