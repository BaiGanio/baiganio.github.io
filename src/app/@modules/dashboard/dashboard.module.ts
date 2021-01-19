import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { InClassComponent } from './views/in-class/in-class.component';
import { StudentInfoComponent } from '../students/components/student-info/student-info.component';
import { ScoresComponent } from './views/scores/scores.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { NotificationPreviewComponent } from './components/notification-preview.component';
import { ReportedIssuesComponent } from './views/reported-issues/reported-issues.component';
import { ReportedIssuePreviewComponent } from './components/reported-issue-preview.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { CraftsmanMenuComponent } from './views/craftsman-menu/craftsman-menu.component';
import { EditCourseComponent } from '../courses/components/edit-course/edit-course.component';
@NgModule({
  declarations: [
      DashboardComponent,
      InClassComponent,
      StudentInfoComponent,
      ScoresComponent,
      NotificationsComponent,
      NotificationPreviewComponent,
      ReportedIssuePreviewComponent,
      ReportedIssuesComponent,
      CraftsmanMenuComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      primaryColour: '#88078e',
      secondaryColour: '#c6ef23',
      backdropBorderRadius: '14px',
      fullScreenBackdrop: true
    }),
  ],
  entryComponents: [
    NotificationPreviewComponent,
    ReportedIssuePreviewComponent, 
    EditCourseComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class DashboardModule { }
