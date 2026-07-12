import { Component, Input } from '@angular/core';

export type MrdCardVariant = 'default' | 'highlight';

@Component({
  selector: 'mrd-card',
  template: `
    <mat-card [class]="'mrd-card mrd-card--' + variant">
      <mat-card-title *ngIf="title">{{ title }}</mat-card-title>
      <mat-card-subtitle *ngIf="subtitle">{{ subtitle }}</mat-card-subtitle>
      <mat-card-content>
        <ng-content></ng-content>
      </mat-card-content>
    </mat-card>
  `,
})
export class MrdCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() variant: MrdCardVariant = 'default';
}
