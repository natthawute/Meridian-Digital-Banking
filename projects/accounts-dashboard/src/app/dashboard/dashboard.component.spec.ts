import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { AccountCardComponent } from '../account-card/account-card.component';
import { MarketDataService } from 'market-data-client';
import { AnalyticsService } from 'analytics-sdk';
import { DesignSystemModule } from 'design-system';

class MarketDataServiceStub {
  getAccountBalance(accountId: string) {
    return of({
      accountId,
      balance: 9876.54,
      currency: 'USD',
      timestamp: new Date(),
    });
  }
}

class AnalyticsServiceStub {
  track = jasmine.createSpy('track');
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let analytics: AnalyticsServiceStub;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, DesignSystemModule],
      declarations: [DashboardComponent, AccountCardComponent],
      providers: [
        { provide: MarketDataService, useClass: MarketDataServiceStub },
        { provide: AnalyticsService, useClass: AnalyticsServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    analytics = TestBed.inject(AnalyticsService) as unknown as AnalyticsServiceStub;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should track page view on init', () => {
    fixture.detectChanges();
    expect(analytics.track).toHaveBeenCalledWith('dashboard_view', { page: 'accounts' });
  });

  it('should load account balances', () => {
    fixture.detectChanges();
    expect(component.accounts.length).toBe(2);
    expect(component.accounts[0].balance.amount).toBe('9876.54');
  });
});
