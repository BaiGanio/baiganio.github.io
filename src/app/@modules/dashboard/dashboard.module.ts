import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StudentInfoComponent } from '../students/components/student-info/student-info.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { NotificationPreviewComponent } from './components/notification-preview.component';
import { ReportedIssuesComponent } from './pages/reported-issues/reported-issues.component';
import { ReportedIssuePreviewComponent } from './components/reported-issue-preview.component';
import { CraftsmanMenuComponent } from './pages/craftsman-menu/craftsman-menu.component';
import { EditCourseComponent } from '../courses/components/edit-course/edit-course.component';
import { TeacherCraftsmanViewComponent } from './views/teacher-craftsman-view/teacher-craftsman-view.component';
import { StudentCraftsmanViewComponent } from './views/student-craftsman-view/student-craftsman-view.component';

@NgModule({
    declarations: [
        DashboardComponent,
        StudentInfoComponent,
        NotificationsComponent,
        NotificationPreviewComponent,
        ReportedIssuePreviewComponent,
        ReportedIssuesComponent,
        CraftsmanMenuComponent,
        TeacherCraftsmanViewComponent,
        StudentCraftsmanViewComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        AngularMaterialModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
