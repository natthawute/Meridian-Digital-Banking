import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrd-card',
  template: `
    <mat-card class="mrd-card">
      <mat-card-header *ngIf="title">
        <mat-card-title>{{ title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <ng-content></ng-content>
      </mat-card-content>
      <mat-card-actions *ngIf="showActions">
        <ng-content select="[mrdCardActions]"></ng-content>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./mrd-card.component.scss'],
})
export class MrdCardComponent {
  @Input() title = '';
  @Input() showActions = false;
}
