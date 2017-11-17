import { Component } from '@angular/core';

@Component({
  selector: 'fm-login',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
          <div class="card">
            <div class="card-header">
              <ul class="nav nav-fill nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link" routerLink="./login" routerLinkActive="active" href="#">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="./register" routerLinkActive="active" href="#">Register</a>
                </li>
              </ul>
            </div>
            <div class="card-block">
              <router-outlet></router-outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['auth.component.scss']
})
export class AuthComponent {}
