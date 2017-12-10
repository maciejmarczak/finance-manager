import { NgModule } from '@angular/core';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    ManagerRoutingModule
  ],
  declarations: [
    ManagerComponent,
    DashboardComponent,
    NavbarComponent
  ]
})
export class ManagerModule {}
