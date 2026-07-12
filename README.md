# Meridian Digital Banking

A small Angular 14 monorepo demo simulating a retail banking platform.

This project is a **prototype for an internal framework-upgrade demo** (Angular 14 → 18). It is not production code.

## Workspace layout

This is an Angular CLI multi-project workspace (not Nx). It uses NgModule-based Angular 14 patterns, including Angular Material 14, to reflect a legacy codebase.

| Project | Type | Real-world concern |
|---|---|---|
| `design-system` | Library | Shared component library used by multiple teams. The two consuming apps represent two different teams: `accounts-dashboard` (Accounts team) and `transfers` (Transfers team). |
| `auth-sso` | Library | SSO/MFA integration: a mock `AuthGuard`, `AuthInterceptor`, and a static `MfaStepComponent`. |
| `analytics-sdk` | Library | Proprietary analytics SDK: `AnalyticsService.track()` is called from downstream apps. |
| `market-data-client` | Library | Third-party financial data provider SDK. The `package.json` notes a vendor compatibility constraint: Angular `<=16`. |
| `accounts-dashboard` | Application | Primary demo app: account list, balances from `market-data-client`, `mrd-card` and `mrd-button` from `design-system`, protected by `AuthGuard`. |
| `transfers` | Application | Second, minimal consumer of `design-system`. It exists specifically to prove cross-team build safety, not to be a feature showcase. |

## Current framework status

This workspace is currently on **Angular 14**, which is end-of-life. The demo’s purpose is to motivate and rehearse an upgrade to **Angular 18**.

## Running the workspace

```bash
npm install
npm run build:all   # builds design-system first, then all downstream apps
npm run test:all    # runs unit tests with Chrome headless
npm run lint:all    # runs ESLint on all projects
npm run ci          # lint + build + test
```

## Known upgrade risks

| Risk | Location | Why it matters |
|---|---|---|
| Legacy Angular Material `appearance="legacy"` form-field API | `design-system/src/lib/mrd-form-field` | Removed in Angular Material v15 (MDC migration). Upgrading will surface a real, visible breaking change. |
| Untested auth and analytics paths | `auth-sso/src/lib/auth`, `analytics-sdk/src/lib/analytics.service.ts` | Auth guard, interceptor, and analytics `track()` paths have no unit tests. This is intentional for the demo to show a coverage gap. |
| Untested balance-parsing logic | `accounts-dashboard/src/app/balance-parser.ts` | Financial data handling has no unit tests, simulating a compliance-relevant coverage gap. |
| Third-party version constraint | `market-data-client/package.json` | The mock vendor SDK requires Angular `<=16`, which blocks an Angular 18 upgrade unless the library is removed or replaced. |

## Transfers app note

`transfers` is deliberately small. It is only meant to prove that a change in the shared `design-system` library does not break more than one consuming app. It is not a second feature set.
