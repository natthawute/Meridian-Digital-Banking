import { Injectable } from '@angular/core';
import {
  MatLegacyDialog as MatDialog,
  MatLegacyDialogRef as MatDialogRef,
} from '@angular/material/legacy-dialog';
import { MrdModalComponent, MrdModalData } from './mrd-modal.component';

@Injectable({ providedIn: 'root' })
export class MrdModalService {
  constructor(private dialog: MatDialog) {}

  open(data: MrdModalData): MatDialogRef<MrdModalComponent> {
    return this.dialog.open(MrdModalComponent, { data, width: '420px' });
  }
}
