import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface MrdModalData {
  title: string;
  message: string;
  confirmLabel?: string;
}

@Component({
  selector: 'mrd-modal',
  template: `
    <div class="mrd-modal">
      <h2 mat-dialog-title>{{ data.title }}</h2>
      <mat-dialog-content>{{ data.message }}</mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-raised-button color="primary" (click)="close()">
          {{ data.confirmLabel || 'OK' }}
        </button>
      </mat-dialog-actions>
    </div>
  `,
})
export class MrdModalComponent {
  constructor(
    private dialogRef: MatDialogRef<MrdModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MrdModalData
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
