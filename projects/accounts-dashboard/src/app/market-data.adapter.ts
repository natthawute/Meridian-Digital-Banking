import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountBalance, MarketDataService } from 'market-data-client';

/**
 * Adapter isolating the vendor market-data-client SDK (supported on
 * Angular <=16 per the vendor's compatibility matrix) behind an app-owned
 * seam, so the workspace can upgrade while the vendor lags. Swap the
 * implementation here when the vendor SDK is updated or replaced.
 */
@Injectable({ providedIn: 'root' })
export class MarketDataAdapter {
  constructor(private vendorClient: MarketDataService) {}

  getAccountBalance(accountId: string): Observable<AccountBalance> {
    return this.vendorClient.getAccountBalance(accountId);
  }
}
