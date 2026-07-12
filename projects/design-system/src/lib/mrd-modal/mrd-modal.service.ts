import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MrdModalComponent, MrdModalData } from './mrd-modal.component';

@Injectable({ providedIn: 'root' })
export class MrdModalService {
  constructor(private dialog: MatDialog) {}

  open(data: MrdModalData): MatDialogRef<MrdModalComponent> {
    return this.dialog.open(MrdModalComponent, { data, width: '420px' });
  }
}
