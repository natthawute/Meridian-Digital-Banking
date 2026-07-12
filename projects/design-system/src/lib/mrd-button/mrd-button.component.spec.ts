import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MrdButtonComponent } from './mrd-button.component';

describe('MrdButtonComponent', () => {
  let fixture: ComponentFixture<MrdButtonComponent>;
  let component: MrdButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MrdButtonComponent],
      imports: [MatButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MrdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('maps the danger variant to the warn Material color', () => {
    component.variant = 'danger';
    expect(component.materialColor).toBe('warn');
  });

  it('applies the variant branding class', () => {
    component.variant = 'accent';
    fixture.detectChanges();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('mrd-button--accent');
  });
});
