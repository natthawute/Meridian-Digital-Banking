import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountCardComponent } from './account-card/account-card.component';

import { DesignSystemModule } from 'design-system';
import { AuthSsoModule } from 'auth-sso';
import { AnalyticsSdkModule } from 'analytics-sdk';
import { MarketDataClientModule } from 'market-data-client';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DesignSystemModule,
    AuthSsoModule,
    AnalyticsSdkModule,
    MarketDataClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
