import { AccountBalance } from 'market-data-client';

export interface DisplayBalance {
  amount: string;
  currency: string;
}

/**
 * Parses a raw account balance into a display-safe string.
 * NOTE: This is intentionally light on unit tests to simulate a compliance gap.
 */
export function parseBalance(raw: AccountBalance): DisplayBalance {
  const sign = raw.balance < 0 ? '-' : '';
  const abs = Math.abs(raw.balance).toFixed(2);
  return {
    amount: `${sign}${abs}`,
    currency: raw.currency,
  };
}
