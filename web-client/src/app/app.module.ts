import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockBackend } from './mock-backend/mock-backend';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';
import { ManagerModule } from './manager/manager.module';

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
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ...httpModules,
    AppRoutingModule,
    AuthModule,
    ManagerModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
