import { NgModule } from '@angular/core';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerNavbarComponent } from './manager-navbar.component';
import { OperationService } from './operation.service';
import { DashboardSummaryComponent } from './dashboard/dashboard-summary.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule
  ],
  declarations: [
    ManagerComponent,
    ManagerNavbarComponent,
    DashboardComponent,
    DashboardSummaryComponent
  ],
  providers: [
    OperationService
  ]
})
export class ManagerModule {}
