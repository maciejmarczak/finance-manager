import { Directive } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, Validator } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[fmEmailNotTaken][ngModel]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: EmailNotTakenValidator, multi: true }
  ]
})
export class EmailNotTakenValidator implements Validator {

  constructor(private authService: AuthService) {}

  validate(control: AbstractControl): Observable<{ [key: string]: any; }> {
    return this.authService.checkEmailTaken(control.value)
      .map(isTaken => {
        return isTaken ? { emailTaken: true } : null;
      })
  }
}
