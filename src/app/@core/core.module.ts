import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { ChecklistDatabase } from '../@shared/interfaces/checklist-database.module';
import { AccountService } from '../@services/account.service';
import { AuthService } from '../@services/auth.service';
import { BackendService } from '../@services/backend.service';
import { CoursesService } from '../@services/courses.service';
import { ErrorHandlerService } from '../@services/error-handler.service';
import { EventBusService } from '../@services/event-bus.service';
import { RoslynService } from '../@services/roslyn.service';
import { SignalRService } from '../@services/signalR.service';
import { StudentService } from '../@services/student.service';
import { SubscriptionService } from '../@services/subscription.service';
import { TeacherService } from '../@services/teacher.service';
import { UserDataService } from '../@services/user-data.service';
import { UtilityService } from '../@services/utility.service';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { BloggersService } from '../@services/bloggers.service';
import { FhAlertService } from '../@shared/fh-alert/fh-alert-service';
import { ToDoService } from '../@services/todo.service';
import { ArticlesService } from '../@services/articles.service';
import { JwtHelperService } from '@auth0/angular-jwt';

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
    BloggersService,
    ToDoService,
    ArticlesService,
    FhAlertService,
    ChecklistDatabase,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
