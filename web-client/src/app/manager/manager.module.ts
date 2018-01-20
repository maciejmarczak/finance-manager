import { NgModule } from '@angular/core';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerNavbarComponent } from './manager-navbar.component';
import { WalletService } from './wallet.service';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts-x';
import { DashboardChartsComponent } from './dashboard/charts/dashboard-charts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationsListComponent } from './dashboard/operations-list.component';
import { ChartsDataFiltersComponent } from './dashboard/charts/charts-data-filters.component';
import { BsDatepickerModule, ModalModule, TypeaheadModule } from 'ngx-bootstrap';
import { AddOperationComponent } from './dashboard/add-operation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ManagerRoutingModule,
    ChartsModule,
    ModalModule,
    TypeaheadModule,
    BsDatepickerModule
  ],
  declarations: [
    ManagerComponent,
    ManagerNavbarComponent,
    DashboardComponent,
    DashboardChartsComponent,
    ChartsDataFiltersComponent,
    OperationsListComponent,
    AddOperationComponent
  ],
  entryComponents: [
    AddOperationComponent
  ],
  providers: [
    WalletService
  ]
})
export class ManagerModule {}
