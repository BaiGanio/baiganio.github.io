import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendService } from '../@services/backend.service';
import { UserDataService } from '../@services/user-data.service';
import { EventBusService } from '../@services/event-bus.service';
import { ErrorHandlerService } from '../@services/error-handler.service';
import { UtilityService } from '../@services/utility.service';
import { StudentService } from '../@services/student.service';
import { SubscriptionService } from '../@services/subscription.service';
import { RoslynService } from '../@services/roslyn.service';
import { AuthGuard } from './auth.guard';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { CoursesService } from '../@services/courses.service';
import { AuthService } from '../@services/auth.service';
import { AccountService } from '../@services/account.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RoleGuard } from './role.guard';
import { SignalRService } from '../@services/signalR.service';
// import { LinechartComponent } from '../@shared/components/charts/linechart/linechart.component';
import { ChecklistDatabase } from '../@shared/interfaces/checklist-database.module';
import { TeacherService } from '../@services/teacher.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    JwtHelperService,
    BackendService,
    AuthService,
    UserDataService,
    EventBusService,
    ErrorHandlerService,
    UtilityService,
    CoursesService,
    StudentService,
    SubscriptionService,
    RoslynService,
    SignalRService,
    AccountService,
    TeacherService,
    ChecklistDatabase
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
