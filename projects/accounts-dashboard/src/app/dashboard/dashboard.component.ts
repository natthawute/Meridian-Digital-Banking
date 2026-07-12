import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'analytics-sdk';
import { MrdModalService } from 'design-system';
import { DisplayBalance, toDisplayBalance } from '../balance-parser';
import { MarketDataAdapter } from '../market-data.adapter';

interface AccountRow {
  id: string;
  name: string;
  type: string;
  balance?: DisplayBalance;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  accounts: AccountRow[] = [
    { id: 'chk-001', name: 'Everyday Checking', type: 'Checking' },
    { id: 'sav-002', name: 'Rainy Day Savings', type: 'Savings' },
    { id: 'inv-003', name: 'Meridian Invest', type: 'Investment' },
  ];

  constructor(
    private marketData: MarketDataAdapter,
    private analytics: AnalyticsService,
    private modal: MrdModalService
  ) {}

  ngOnInit(): void {
    this.analytics.track('dashboard_view', { page: 'accounts-dashboard' });
    this.accounts.forEach((account) => {
      this.marketData.getAccountBalance(account.id).subscribe((balance) => {
        account.balance = toDisplayBalance(balance.rawBalance, balance.currency);
      });
    });
  }

  viewDetails(account: AccountRow): void {
    this.analytics.track('account_details_click', { accountId: account.id });
    this.modal.open({
      title: account.name,
      message: `${account.type} account ${account.id} — balance ${
        account.balance?.formatted ?? 'loading…'
      }`,
    });
  }
}
