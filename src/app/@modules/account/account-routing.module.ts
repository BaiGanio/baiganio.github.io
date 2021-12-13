import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { ReportIssueComponent } from './pages/report-issue/report-issue.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ForgottenPasswordComponent } from './pages/fotgotten-password/forgotten-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  {
    path: 'report-issue',
    component: ReportIssueComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirmation/:token', component: ConfirmationComponent },
  { path: 'forgotten-password', component: ForgottenPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }
