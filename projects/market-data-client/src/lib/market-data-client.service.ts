import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface AccountBalance {
  accountId: string;
  currency: string;
  /** Raw balance string as returned by the vendor feed, e.g. "12,345.67". */
  rawBalance: string;
  asOf: string;
}

const MOCK_BALANCES: Record<string, string> = {
  'chk-001': '12,340.55',
  'sav-002': '98,700.00',
  'inv-003': '1,204,890.12',
};

/**
 * Mock of a third-party financial data provider SDK.
 * See package.json: vendor compatibility matrix requires Angular <=16.
 */
@Injectable({ providedIn: 'root' })
export class MarketDataService {
  getAccountBalance(accountId: string): Observable<AccountBalance> {
    return of({
      accountId,
      currency: 'USD',
      rawBalance: MOCK_BALANCES[accountId] ?? '0.00',
      asOf: new Date().toISOString(),
    }).pipe(delay(150));
  }
}
