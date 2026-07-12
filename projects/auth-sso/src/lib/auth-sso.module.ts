import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfaStepComponent } from './mfa-step/mfa-step.component';

@NgModule({
  declarations: [MfaStepComponent],
  imports: [CommonModule],
  exports: [MfaStepComponent],
})
export class AuthSsoModule {}
