import { Injectable } from '@angular/core';

/**
 * Mock SSO session service. In a real banking app this would validate
 * a session cookie or token against an identity provider.
 */
@Injectable()
export class AuthService {
  private readonly mockToken = 'mock-sso-token';

  getToken(): string | null {
    return this.mockToken;
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
