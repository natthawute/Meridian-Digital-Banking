import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrd-button',
  template: `
    <button
      mat-raised-button
      [type]="type"
      [disabled]="disabled"
      [color]="materialColor"
      class="mrd-button mrd-button--{{ variant }}">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./mrd-button.component.scss'],
})
export class MrdButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'warn' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;

  get materialColor(): 'primary' | 'accent' | 'warn' | undefined {
    if (this.variant === 'secondary') {
      return 'accent';
    }
    if (this.variant === 'warn') {
      return 'warn';
    }
    return 'primary';
  }
}
