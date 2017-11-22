import {Component} from '@angular/core';

@Component({
  selector: 'fm-auth-register',
  template: `
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control is-invalid" id="email">
        <div class="invalid-feedback">Sorry, that email's taken.</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control is-invalid" id="password">
      </div>
      <div class="form-group">
        <input type="password" class="form-control is-invalid" placeholder="confirm password">
        <div class="invalid-feedback">Passwords don't match.</div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Create Account</button>
      </div>
    </form>
  `
})
export class RegisterComponent {}
