---
name: testing-meridian-apps
description: Smoke-test the Meridian Digital Banking apps (accounts-dashboard + transfers) end-to-end. Use when verifying design-system, auth-sso, or app changes, e.g. during Angular major-version upgrades.
---

# Testing Meridian Digital Banking apps

## Setup
- Use Node 18+ via nvm (`. ~/.nvm/nvm.sh && nvm use 18`). The CI workflow may pin an older Node; local Node just needs to satisfy the workspace's Angular version.
- `npm ci` (or `npm install`) at repo root.
- Libraries build first: `npm run build:all` builds design-system → auth-sso → analytics-sdk → market-data-client, then both apps (apps resolve libs via tsconfig paths → `dist/*`). `ng serve` also requires the libs to have been built at least once.
- Karma needs `CHROME_BIN=/usr/bin/google-chrome`.
- Serve both apps: `npx ng serve accounts-dashboard --port 4200` and `npx ng serve transfers --port 4201`.

## Golden-path checks
1. Dashboard (:4200): heading "Meridian Digital Banking — Accounts"; 3 cards (Everyday Checking / Rainy Day Savings / Meridian Invest) with formatted currency balances (not stuck on "Loading…" — balances come from the market-data-client mock). Click "View details" → Material dialog titled with account name, message like "Checking account chk-001 — balance $12,340.55"; OK closes it.
2. Transfers (:4201): MFA block (auth-mfa-step) plus 3 `mrd-form-field` fields (From account, To account selects; Amount input with USD hint). Change the To select, enter an amount, click "Submit transfer" → dialog "Transfer of $<amount> from <from> to <to> was submitted."; after closing, the submit button must be enabled again (regression: it re-enables in `afterClosed()`).

## Known fragile spots
- `mrd-form-field` content-projects `matNativeControl` controls into `mat-form-field`; after Material upgrades this may break at runtime with "mat-form-field must contain a MatFormFieldControl" even though builds pass — always load the transfers form in a browser.
- Material theme is referenced 4× in `angular.json` (build+test of both apps); a wrong prebuilt-theme path fails builds or silently unstyles the apps.
- CI (`.github/workflows/ci.yml`) may not trigger on the first app-integration push; an empty commit push can re-trigger it.

## Devin Secrets Needed
None — everything runs locally with mock data.
