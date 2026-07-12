import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';

import { MrdButtonComponent } from './mrd-button/mrd-button.component';
import { MrdCardComponent } from './mrd-card/mrd-card.component';
import { MrdFormFieldComponent } from './mrd-form-field/mrd-form-field.component';
import { MrdModalComponent } from './mrd-modal/mrd-modal.component';

@NgModule({
  declarations: [
    MrdButtonComponent,
    MrdCardComponent,
    MrdFormFieldComponent,
    MrdModalComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  exports: [
    MrdButtonComponent,
    MrdCardComponent,
    MrdFormFieldComponent,
    MrdModalComponent,
  ],
})
export class DesignSystemModule {}
