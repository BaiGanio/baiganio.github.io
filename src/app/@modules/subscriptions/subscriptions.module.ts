import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { BloggerSubscriptionPreviewComponent } from './components/blogger-subscription-preview/blogger-subscription-preview.component';
import { StudentSubscriptionPreviewComponent } from './components/student-subscription-preview/student-subscription-preview.component';
import { SubscriptionPreviewComponent } from './components/subscription-preview/subscription-preview.component';
import { TeacherSubscriptionPreviewComponent } from './components/teacher-subscription-preview/teacher-subscription-preview.component';
import { MySubscriptionsComponent } from './pages/my-subscriptions/my-subscriptions.component';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions.component';
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
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      primaryColour: '#88078e',
      secondaryColour: '#c6ef23',
      backdropBorderRadius: '14px',
      fullScreenBackdrop: true
    }),
  ],
  entryComponents: [
     SubscriptionPreviewComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SubscriptionsModule { }
