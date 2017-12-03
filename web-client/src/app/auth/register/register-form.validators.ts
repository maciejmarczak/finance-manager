import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
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
  static valuesMatch(fg: FormGroup): ValidationErrors {
    const val: AbstractControl = fg.controls['val'];
    const confirmVal: AbstractControl = fg.controls['confirmVal'];

    let errors: ValidationErrors;

    if (val.value !== confirmVal.value) {
      errors = { valuesMatch: true };
    }

    confirmVal.setErrors(errors);
    return errors;
  }
}
