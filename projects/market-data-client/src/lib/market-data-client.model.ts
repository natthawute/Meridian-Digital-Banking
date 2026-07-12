export interface AccountBalance {
  accountId: string;
  balance: number;
  currency: string;
  timestamp: Date;
}

export interface RawBalanceResponse {
  accountId: string;
  balance: string;
  currency: string;
  timestamp: string;
}
