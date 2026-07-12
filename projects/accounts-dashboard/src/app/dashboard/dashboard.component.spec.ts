import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyticsService } from 'analytics-sdk';
import { DesignSystemModule, MrdModalService } from 'design-system';
import { MarketDataService } from 'market-data-client';
import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let component: DashboardComponent;
  let analytics: jasmine.SpyObj<AnalyticsService>;
  let modal: jasmine.SpyObj<MrdModalService>;

  beforeEach(async () => {
    analytics = jasmine.createSpyObj('AnalyticsService', ['track']);
    modal = jasmine.createSpyObj('MrdModalService', ['open']);
    const marketData = jasmine.createSpyObj('MarketDataService', [
      'getAccountBalance',
    ]);
    marketData.getAccountBalance.and.callFake((accountId: string) =>
      of({
        accountId,
        currency: 'USD',
        rawBalance: '1,000.00',
        asOf: new Date().toISOString(),
      })
    );

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [NoopAnimationsModule, DesignSystemModule],
      providers: [
        { provide: AnalyticsService, useValue: analytics },
        { provide: MrdModalService, useValue: modal },
        { provide: MarketDataService, useValue: marketData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tracks a page view on load', () => {
    expect(analytics.track).toHaveBeenCalledWith('dashboard_view', {
      page: 'accounts-dashboard',
    });
  });

  it('renders one card per account with its balance', () => {
    const cards = fixture.nativeElement.querySelectorAll('mrd-card');
    expect(cards.length).toBe(3);
    expect(cards[0].textContent).toContain('$1,000.00');
  });

  it('opens the details modal when View details is pressed', () => {
    component.viewDetails(component.accounts[0]);
    expect(modal.open).toHaveBeenCalled();
    expect(analytics.track).toHaveBeenCalledWith('account_details_click', {
      accountId: 'chk-001',
    });
  });
});
