import { Component } from '@angular/core';
import { AnalyticsService } from 'analytics-sdk';
import { MrdModalService } from 'design-system';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss'],
})
export class TransferFormComponent {
  accounts = ['Everyday Checking', 'Rainy Day Savings', 'Meridian Invest'];

  fromAccount = this.accounts[0];
  toAccount = this.accounts[1];
  amount: number | null = null;

  constructor(
    private modal: MrdModalService,
    private analytics: AnalyticsService
  ) {}

  submit(): void {
    this.analytics.track('transfer_submit', {
      from: this.fromAccount,
      to: this.toAccount,
      amount: this.amount,
    });
    this.modal.open({
      title: 'Transfer submitted',
      message: `Transfer of $${this.amount ?? 0} from ${this.fromAccount} to ${this.toAccount} was submitted.`,
    });
  }
}
