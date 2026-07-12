import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { AuthSsoModule } from 'auth-sso';
import { DesignSystemModule } from 'design-system';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';

@NgModule({
  declarations: [AppComponent, TransferFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    AuthSsoModule,
    DesignSystemModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
