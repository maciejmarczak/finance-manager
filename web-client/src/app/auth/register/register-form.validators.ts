import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthService } from '../auth.service';

export class EmailValidators {
  static emailTaken(authService: AuthService): ValidatorFn {
    return function(c: AbstractControl): ValidationErrors {
      return authService.checkEmailTaken(c.value).map(
        isTaken => isTaken ? { emailTaken: true } : null
      );
    }
  }
}

export class PasswordValidators {
  static valuesMatch(c: AbstractControl): ValidationErrors {
    const confirmValControl = c.get('confirmVal');

    const val = c.get('val').value;
    const confirmVal = confirmValControl.value;

    if (val !== confirmVal) {
      confirmValControl.setErrors({ valuesMatch: true });
      return { valuesMatch: true };
    } else {
      confirmValControl.setErrors(null);
    }
  }
}
