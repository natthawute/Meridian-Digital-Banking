import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MrdButtonComponent } from './mrd-button/mrd-button.component';
import { MrdCardComponent } from './mrd-card/mrd-card.component';
import { MrdFormFieldComponent } from './mrd-form-field/mrd-form-field.component';
import { MrdModalComponent } from './mrd-modal/mrd-modal.component';
import { MrdModalService } from './mrd-modal/mrd-modal.service';

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
    MatInputModule,
  ],
  exports: [
    MrdButtonComponent,
    MrdCardComponent,
    MrdFormFieldComponent,
    MrdModalComponent,
  ],
  providers: [MrdModalService],
})
export class DesignSystemModule { }
