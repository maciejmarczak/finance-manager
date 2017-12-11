import { NgModule } from '@angular/core';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerNavbarComponent } from './manager-navbar.component';
import { ManagerService } from './manager.service';

@NgModule({
  imports: [
    ManagerRoutingModule
  ],
  declarations: [
    ManagerComponent,
    ManagerNavbarComponent,
    DashboardComponent
  ],
  providers: [
    ManagerService
  ]
})
export class ManagerModule {}
