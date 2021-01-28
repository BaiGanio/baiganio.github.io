import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ReportedIssuesComponent } from './pages/reported-issues/reported-issues.component';
import { CraftsmanMenuComponent } from './pages/craftsman-menu/craftsman-menu.component';
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
  { path: 'craftsman-menu', component: CraftsmanMenuComponent },
  { path: 'craftsman-menu/courses', component: CoursesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
