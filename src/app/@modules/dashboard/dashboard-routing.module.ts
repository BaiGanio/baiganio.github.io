import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ReportedIssuesComponent } from './pages/reported-issues/reported-issues.component';
import { InClassComponent } from './pages/in-class/in-class.component';
import { ScoresComponent } from './pages/scores/scores.component';

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
  },
  {
    path: 'in-class', component: InClassComponent
  },
  {
    path: 'scores', component: ScoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
