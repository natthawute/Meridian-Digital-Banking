import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'auth-sso';
import { TransferFormComponent } from './transfer-form/transfer-form.component';

const routes: Routes = [
  { path: '', component: TransferFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
