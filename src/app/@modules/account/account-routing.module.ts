import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { ReportIssueComponent } from './pages/report-issue/report-issue.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ForgottenPasswordComponent } from './pages/fotgotten-password/forgotten-password.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  {
    path: 'report-issue',
    component: ReportIssueComponent
  },
  { path: 'confirmation/:token', component: ConfirmationComponent },
  { path: 'forgotten-password', component: ForgottenPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }
