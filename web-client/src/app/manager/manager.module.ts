import { NgModule } from '@angular/core';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerNavbarComponent } from './manager-navbar.component';
import { WalletService } from './wallet.service';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts-x';
import { DashboardChartsComponent } from './dashboard/charts/dashboard-charts.component';
import { FormsModule } from '@angular/forms';
import { OperationsListComponent } from './dashboard/operations-list.component';
import { ChartsDataFiltersComponent } from './dashboard/charts/charts-data-filters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ManagerRoutingModule,
    ChartsModule
  ],
  declarations: [
    ManagerComponent,
    ManagerNavbarComponent,
    DashboardComponent,
    DashboardChartsComponent,
    ChartsDataFiltersComponent,
    OperationsListComponent
  ],
  providers: [
    WalletService
  ]
})
export class ManagerModule {}
