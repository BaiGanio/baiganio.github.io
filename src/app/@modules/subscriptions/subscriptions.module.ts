import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions.component';
import { SubscriptionPreviewComponent } from './components/subscription-preview/subscription-preview.component';
import { MySubscriptionsComponent } from './pages/my-subscriptions/my-subscriptions.component';
import { StudentSubscriptionPreviewComponent } from './components/student-subscription-preview/student-subscription-preview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherSubscriptionPreviewComponent } from './components/teacher-subscription-preview/teacher-subscription-preview.component';
import { BloggerSubscriptionPreviewComponent } from './components/blogger-subscription-preview/blogger-subscription-preview.component';

@NgModule({
  declarations: [
      SubscriptionsComponent,
      SubscriptionPreviewComponent,
      MySubscriptionsComponent,
      StudentSubscriptionPreviewComponent,
      TeacherSubscriptionPreviewComponent,
      BloggerSubscriptionPreviewComponent
    ],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    // NgxLoadingModule.forRoot({
    //   animationType: ngxLoadingAnimationTypes.threeBounce,
    //   primaryColour: '#88078e',
    //   secondaryColour: '#c6ef23',
    // }),
  ],
  entryComponents: [
    SubscriptionPreviewComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export declare  class SubscriptionsModule { }
