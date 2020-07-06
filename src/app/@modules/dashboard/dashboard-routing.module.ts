import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ReportedIssuesComponent } from './pages/reported-issues/reported-issues.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: 'notifications', component: NotificationsComponent
  },
  {
    path: 'reported-issues', component: ReportedIssuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
