import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../models/account.model';
import { DisplayBalance } from '../balance-parser';

@Component({
  selector: 'app-account-card',
  template: `
    <mrd-card [title]="account.name" [showActions]="true">
      <p class="account-type">{{ account.type | titlecase }} account</p>
      <p class="account-balance">
        Balance: <strong>{{ balance.amount }} {{ balance.currency }}</strong>
      </p>
      <mrd-button mrdCardActions variant="primary" (click)="view.emit()">View details</mrd-button>
    </mrd-card>
  `,
  styleUrls: ['./account-card.component.scss'],
})
export class AccountCardComponent {
  @Input() account!: Account;
  @Input() balance!: DisplayBalance;
  @Output() view = new EventEmitter<void>();
}
