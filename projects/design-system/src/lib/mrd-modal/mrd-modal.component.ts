import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface MrdModalData {
  title?: string;
  message?: string;
}

@Component({
  selector: 'mrd-modal',
  template: `
    <h2 mat-dialog-title *ngIf="data.title">{{ data.title }}</h2>
    <mat-dialog-content>{{ data.message }}</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-raised-button color="primary" [mat-dialog-close]="true">OK</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./mrd-modal.component.scss'],
})
export class MrdModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MrdModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MrdModalData,
  ) {}
}
