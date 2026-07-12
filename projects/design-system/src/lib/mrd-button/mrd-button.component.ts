import { Component, EventEmitter, Input, Output } from '@angular/core';

export type MrdButtonVariant = 'primary' | 'accent' | 'danger';

@Component({
  selector: 'mrd-button',
  template: `
    <button
      mat-raised-button
      [color]="materialColor"
      [disabled]="disabled"
      [class]="'mrd-button mrd-button--' + variant"
      (click)="pressed.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class MrdButtonComponent {
  @Input() variant: MrdButtonVariant = 'primary';
  @Input() disabled = false;
  @Output() pressed = new EventEmitter<MouseEvent>();

  get materialColor(): string {
    switch (this.variant) {
      case 'accent':
        return 'accent';
      case 'danger':
        return 'warn';
      default:
        return 'primary';
    }
  }
}
