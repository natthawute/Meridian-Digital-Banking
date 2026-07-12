import { Injectable } from '@angular/core';

/**
 * Mock SSO session service. In the real platform this would validate a
 * session against the corporate identity provider; here it just holds a
 * hardcoded token so guarded routes render in the demo.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private sessionToken: string | null = 'mock-sso-session-token';

  hasValidSession(): boolean {
    return this.sessionToken !== null;
  }

  getToken(): string | null {
    return this.sessionToken;
  }
}
