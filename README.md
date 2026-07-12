# Meridian Digital Banking

A small Angular 14 monorepo demo simulating a retail banking platform. It is a prototype for an internal framework-upgrade presentation (Angular 14 → 18) — not production code.

## Why this exists

The workspace is currently on **Angular 14**, which has reached end-of-life. The demo motivates and rehearses an upgrade to **Angular 18** by recreating, at small scale, the concerns a real banking platform would face during that upgrade.

## Project map

This is an Angular CLI multi-project workspace (not Nx), using NgModule-based Angular 14 patterns — no standalone components — plus Angular Material 14.

| Project | Type | Real-world concern it simulates |
|---|---|---|
| `design-system` | Library | Shared component library (`mrd-button`, `mrd-card`, `mrd-form-field`, `mrd-modal`) used by multiple teams. The two consuming apps represent two teams: `accounts-dashboard` and `transfers`. |
| `auth-sso` | Library | SSO/MFA integration: mock `AuthGuard`, `AuthInterceptor`, and a static `MfaStepComponent`. |
| `analytics-sdk` | Library | Proprietary analytics SDK: `AnalyticsService.track()` is called from both apps. |
| `market-data-client` | Library | Third-party financial data provider SDK with a vendor version constraint (Angular `<=16`, documented in its `package.json`). |
| `accounts-dashboard` | Application | Primary demo app: account list with balances from `market-data-client`, built with `design-system` components, protected by `AuthGuard`. |
| `transfers` | Application | Second, deliberately minimal consumer of `design-system`. **It exists specifically to prove cross-team build safety — that a shared-library upgrade doesn't break more than one team's app — not as a feature showcase.** |

## Running the workspace

```bash
npm install
npm run build:all   # builds the shared libraries first, then both apps
npm run test:all    # unit tests via Chrome headless
npm run lint:all    # ESLint for every project
npm run ci          # lint + build + test
```

Because `build:all` builds `design-system` before the apps, a breaking change in the shared library visibly fails both downstream app builds.

CI (`.github/workflows/ci.yml`) runs the same lint + build + test steps on every pull request.

## Known upgrade risks

Written for a non-frontend audience:

1. **Legacy form-field styling API.** Our custom `mrd-form-field` component uses an old Angular Material option (`appearance="legacy"`) that was **removed** in newer Angular Material versions. When we upgrade, every screen using this component will visibly break until the component is rewritten. This is a real, demonstrable breaking change.
2. **Untested sign-in and analytics code.** The `auth-sso` and `analytics-sdk` libraries have **no automated tests**. If the upgrade silently changes their behavior (e.g. the token no longer attaches to requests), nothing will catch it automatically.
3. **Untested financial-data parsing.** The dashboard converts raw vendor balance strings (like `"1,204,890.12"`) into numbers in `projects/accounts-dashboard/src/app/balance-parser.ts`. This financial-data handling has almost no test coverage — a compliance-relevant gap for a banking platform.
4. **Vendor version ceiling.** The mock third-party market-data SDK documents a compatibility constraint of Angular `<=16`. In a real upgrade, this vendor dependency would block moving to Angular 18 until the vendor certifies a newer version or the SDK is replaced.
