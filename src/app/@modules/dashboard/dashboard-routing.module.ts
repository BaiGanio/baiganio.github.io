import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { ReportedIssuesComponent } from './views/reported-issues/reported-issues.component';
import { InClassComponent } from './views/in-class/in-class.component';
import { ScoresComponent } from './views/scores/scores.component';
import { CraftsmanMenuComponent } from './views/craftsman-menu/craftsman-menu.component';
import { CoursesDetailsComponent } from '../courses/views/courses-details/courses-details.component';

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
  },
  { path: 'craftsman-menu', component: CraftsmanMenuComponent },
  { path: 'craftsman-menu/courses', component: CoursesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
