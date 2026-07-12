import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountBalance } from './market-data-client.model';

/**
 * Mock third-party financial market data provider. Simulates an async
 * API call returning an account balance.
 */
@Injectable({
  providedIn: 'root',
})
export class MarketDataService {
  getAccountBalance(accountId: string): Observable<AccountBalance> {
    return of({
      accountId,
      balance: 12345.67,
      currency: 'USD',
      timestamp: new Date(),
    });
  }
}
