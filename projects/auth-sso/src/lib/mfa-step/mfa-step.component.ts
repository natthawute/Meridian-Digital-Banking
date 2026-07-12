import { Component } from '@angular/core';

/**
 * Static MFA challenge screen. Display-only: no verification logic and no
 * branching flow. It exists to be shown, not to function.
 */
@Component({
  selector: 'auth-mfa-step',
  template: `
    <div class="auth-mfa-step">
      <h3>Multi-factor authentication</h3>
      <p>Enter the code sent to your device</p>
      <input type="text" maxlength="6" placeholder="123456" />
    </div>
  `,
})
export class MfaStepComponent {}
