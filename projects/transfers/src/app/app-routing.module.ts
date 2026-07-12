import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'auth-sso';
import { TransferFormComponent } from './transfer-form/transfer-form.component';

const routes: Routes = [
  {
    path: 'transfer',
    component: TransferFormComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'transfer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
