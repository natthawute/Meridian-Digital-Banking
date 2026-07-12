import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AccountCardComponent } from './account-card.component';
import { DesignSystemModule } from 'design-system';

describe('AccountCardComponent', () => {
  let component: AccountCardComponent;
  let fixture: ComponentFixture<AccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, DesignSystemModule],
      declarations: [AccountCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCardComponent);
    component = fixture.componentInstance;
    component.account = { accountId: '1000001', name: 'Checking', type: 'checking' };
    component.balance = { amount: '1234.56', currency: 'USD' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display account balance', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('1234.56 USD');
  });

  it('should emit view event on button click', () => {
    const spy = jasmine.createSpy('view');
    component.view.subscribe(spy);
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(spy).toHaveBeenCalled();
  });
});
