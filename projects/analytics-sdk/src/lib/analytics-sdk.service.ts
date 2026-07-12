import { Injectable } from '@angular/core';

/**
 * Mock of the proprietary Meridian analytics SDK. The real SDK ships events
 * to an internal pipeline; this mock just logs to the console.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  track(eventName: string, payload?: any): void {
    // eslint-disable-next-line no-console
    console.log(`[analytics] ${eventName}`, payload ?? {});
  }
}
