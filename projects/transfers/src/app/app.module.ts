import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';

import { DesignSystemModule } from 'design-system';
import { AuthSsoModule } from 'auth-sso';
import { AnalyticsSdkModule } from 'analytics-sdk';

@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DesignSystemModule,
    AuthSsoModule,
    AnalyticsSdkModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
