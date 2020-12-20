import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { ChecklistDatabase } from '../@shared/interfaces/checklist-database.module';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    // AuthGuard,
    // RoleGuard,
    // JwtHelperService,
    // BackendService,
    // AuthService,
    // UserDataService,
    // EventBusService,
    // ErrorHandlerService,
    // UtilityService,
    // CoursesService,
    // StudentService,
    // SubscriptionService,
    // RoslynService,
    // SignalRService,
    // AccountService,
    // TeacherService,
    ChecklistDatabase
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
