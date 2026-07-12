import { Component, Input } from '@angular/core';

/**
 * Meridian branded form field.
 *
 * NOTE: uses the pre-MDC `appearance="legacy"` Angular Material form-field
 * API, which is removed in Angular Material v15. This is a known upgrade
 * risk for the Angular 14 -> 18 migration.
 */
@Component({
  selector: 'mrd-form-field',
  template: `
    <mat-form-field appearance="legacy" class="mrd-form-field">
      <mat-label>{{ label }}</mat-label>
      <ng-content></ng-content>
      <mat-hint *ngIf="hint">{{ hint }}</mat-hint>
    </mat-form-field>
  `,
})
export class MrdFormFieldComponent {
  @Input() label = '';
  @Input() hint = '';
}
