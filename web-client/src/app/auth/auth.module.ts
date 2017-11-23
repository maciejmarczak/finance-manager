import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuard } from './auth.guard';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { EmailNotTakenValidator } from './register/email-not-taken.validator';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    EmailNotTakenValidator
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AuthModule {}
