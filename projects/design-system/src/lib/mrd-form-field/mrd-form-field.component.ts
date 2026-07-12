import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  ViewChild,
} from '@angular/core';
import { MatLegacyFormField as MatFormField } from '@angular/material/legacy-form-field';
import { MatFormFieldControl } from '@angular/material/form-field';

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
export class MrdFormFieldComponent implements AfterContentInit {
  @Input() label = '';
  @Input() hint = '';

  @ViewChild(MatFormField, { static: true })
  private formField!: MatFormField;

  @ContentChild(MatFormFieldControl, { static: true })
  private control!: MatFormFieldControl<unknown>;

  // Content projected through <ng-content> is not picked up by
  // mat-form-field's own content query, so the control is wired up manually.
  ngAfterContentInit(): void {
    if (this.control) {
      this.formField._control = this.control;
    }
  }
}
