import { Injectable } from '@angular/core';

/**
 * Mock proprietary analytics SDK. In a real banking app this would send
 * events to a backend analytics collector.
 */
@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  track(eventName: string, payload?: unknown): void {
    // eslint-disable-next-line no-console
    console.log('[Analytics]', eventName, payload);
  }
}
