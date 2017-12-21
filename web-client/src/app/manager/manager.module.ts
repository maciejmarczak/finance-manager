import { NgModule } from '@angular/core';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerNavbarComponent } from './manager-navbar.component';
import { WalletService } from './wallet.service';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DashboardChartsComponent } from './dashboard/charts/dashboard-charts.component';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ChartsModule
  ],
  declarations: [
    ManagerComponent,
    ManagerNavbarComponent,
    DashboardComponent,
    DashboardChartsComponent
  ],
  providers: [
    WalletService
  ]
})
export class ManagerModule {}
