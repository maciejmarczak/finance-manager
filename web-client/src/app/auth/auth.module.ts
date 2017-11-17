import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuard } from './auth.guard';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';
import {FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AuthRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AuthModule {}
