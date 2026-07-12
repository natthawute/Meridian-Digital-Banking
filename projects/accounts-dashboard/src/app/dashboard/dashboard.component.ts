import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnalyticsService } from 'analytics-sdk';
import { MarketDataService } from 'market-data-client';
import { Account } from '../models/account.model';
import { DisplayBalance, parseBalance } from '../balance-parser';

interface AccountRow {
  account: Account;
  balance: DisplayBalance;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  accounts: AccountRow[] = [];

  readonly accountList: Account[] = [
    { accountId: '1000001', name: 'Everyday Checking', type: 'checking' },
    { accountId: '1000002', name: 'High-Yield Savings', type: 'savings' },
  ];

  constructor(
    private analytics: AnalyticsService,
    private marketData: MarketDataService,
  ) {}

  ngOnInit(): void {
    this.analytics.track('dashboard_view', { page: 'accounts' });
    this.loadBalances();
  }

  loadBalances(): void {
    const requests = this.accountList.map((account) =>
      this.marketData
        .getAccountBalance(account.accountId)
        .pipe(map((balance) => ({ account, balance: parseBalance(balance) }))),
    );

    forkJoin(requests).subscribe((rows) => {
      this.accounts = rows;
    });
  }
}
