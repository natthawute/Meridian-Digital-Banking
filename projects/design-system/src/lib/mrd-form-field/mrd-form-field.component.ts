import { Component, Input } from '@angular/core';

/**
 * NOTE: This component intentionally uses the legacy `appearance="legacy"` API of
 * Angular Material's form-field. In Angular Material v15+ `legacy` and `standard`
 * appearances are removed, so this is a deliberate upgrade risk to demonstrate.
 */
@Component({
  selector: 'mrd-form-field',
  template: `
    <mat-form-field class="mrd-form-field" appearance="legacy" floatLabel="auto">
      <mat-label *ngIf="label">{{ label }}</mat-label>
      <ng-content></ng-content>
      <mat-hint *ngIf="hint">{{ hint }}</mat-hint>
    </mat-form-field>
  `,
  styleUrls: ['./mrd-form-field.component.scss'],
})
export class MrdFormFieldComponent {
  @Input() label = '';
  @Input() hint = '';
}
