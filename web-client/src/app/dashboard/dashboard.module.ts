import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    NavbarComponent
  ]
})
export class DashboardModule {}
