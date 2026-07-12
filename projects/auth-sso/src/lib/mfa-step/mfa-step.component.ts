import { Component } from '@angular/core';

/**
 * Static MFA challenge screen. This is a visual placeholder only and does not
 * perform real verification or branch the user flow.
 */
@Component({
  selector: 'auth-mfa-step',
  template: `
    <div class="mfa-step">
      <h2>Verify your identity</h2>
      <p>Enter the code sent to your device.</p>
      <input type="text" placeholder="000000" maxlength="6" inputmode="numeric" />
    </div>
  `,
  styleUrls: ['./mfa-step.component.scss'],
})
export class MfaStepComponent {}
