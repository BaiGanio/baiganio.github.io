import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { ReportIssueComponent } from './pages/report-issue/report-issue.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  {
    path: 'report-issue',
    component: ReportIssueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }
