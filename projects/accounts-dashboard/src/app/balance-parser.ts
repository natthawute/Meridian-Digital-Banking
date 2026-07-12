/**
 * Parses raw vendor balance strings (e.g. "1,204,890.12") into numbers and
 * formats them for display. Financial data handling that is intentionally
 * under-tested for the coverage-gap demo.
 */
export interface DisplayBalance {
  amount: number;
  formatted: string;
}

export function parseRawBalance(raw: string): number {
  const normalized = raw.replace(/,/g, '').trim();
  const amount = Number(normalized);
  return Number.isFinite(amount) ? amount : 0;
}

export function toDisplayBalance(raw: string, currency: string): DisplayBalance {
  const amount = parseRawBalance(raw);
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
  return { amount, formatted };
}
