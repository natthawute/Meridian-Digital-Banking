import { Component } from '@angular/core';
import { AnalyticsService } from 'analytics-sdk';
import { MrdModalService } from 'design-system';

@Component({
  selector: 'app-transfer-form',
  template: `
    <h1 class="page-title">Transfer funds</h1>

    <form #form="ngForm" (ngSubmit)="onSubmit()">
      <mrd-form-field label="From account">
        <select matNativeControl name="from" [(ngModel)]="fromAccount" required>
          <option value="checking">Everyday Checking</option>
          <option value="savings">High-Yield Savings</option>
        </select>
      </mrd-form-field>

      <mrd-form-field label="To account">
        <select matNativeControl name="to" [(ngModel)]="toAccount" required>
          <option value="checking">Everyday Checking</option>
          <option value="savings">High-Yield Savings</option>
        </select>
      </mrd-form-field>

      <mrd-form-field label="Amount">
        <input matNativeControl type="number" name="amount" [(ngModel)]="amount" />
      </mrd-form-field>

      <mrd-button variant="primary" type="submit" [disabled]="submitting">Submit transfer</mrd-button>
    </form>

    <div class="mfa-demo">
      <h2>MFA step demo</h2>
      <auth-mfa-step></auth-mfa-step>
    </div>
  `,
  styleUrls: ['./transfer-form.component.scss'],
})
export class TransferFormComponent {
  fromAccount = 'checking';
  toAccount = 'savings';
  amount = 0;
  submitting = false;

  constructor(
    private analytics: AnalyticsService,
    private modal: MrdModalService,
  ) {}

  onSubmit(): void {
    if (this.submitting) {
      return;
    }

    this.submitting = true;

    this.analytics.track('transfer_submit', {
      from: this.fromAccount,
      to: this.toAccount,
      amount: this.amount,
    });

    this.modal.open({
      title: 'Transfer submitted',
      message: `A transfer of $${this.amount} from ${this.fromAccount} to ${this.toAccount} has been submitted.`,
    });
  }
}
