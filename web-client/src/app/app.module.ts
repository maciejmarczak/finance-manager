import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockBackend } from './mock-backend/mock-backend';

const httpModules: any[] = [
  HttpClientModule
];

if (environment.useMockBackend) {
  httpModules.push(HttpClientInMemoryWebApiModule.forRoot(MockBackend,
    { delay: 3000, apiBase: '' }));
}

@NgModule({
  imports: [
    BrowserModule,
    ...httpModules,
    AppRoutingModule,
    AuthModule,
    DashboardModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
