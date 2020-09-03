import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { InClassComponent } from './pages/in-class/in-class.component';
import { StudentInfoComponent } from '../students/components/student-info/student-info.component';
import { ScoresComponent } from './pages/scores/scores.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { NotificationPreviewComponent } from './components/notification-preview.component';
import { ReportedIssuesComponent } from './pages/reported-issues/reported-issues.component';
import { ReportedIssuePreviewComponent } from './components/reported-issue-preview.component';
@NgModule({
  declarations: [
      DashboardComponent,
      InClassComponent,
      StudentInfoComponent,
      ScoresComponent,
      NotificationsComponent,
      NotificationPreviewComponent,
      ReportedIssuePreviewComponent,
      ReportedIssuesComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      primaryColour: '#88078e',
      secondaryColour: '#c6ef23',
    }),
  ],
  entryComponents: [
    NotificationPreviewComponent,
    ReportedIssuePreviewComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class DashboardModule { }