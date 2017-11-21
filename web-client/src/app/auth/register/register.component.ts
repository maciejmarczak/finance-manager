import {Component} from '@angular/core';

@Component({
  selector: 'fm-auth-register',
  template: `
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="confirm password">
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Create Account</button>
      </div>
    </form>
  `
})
export class RegisterComponent {}
