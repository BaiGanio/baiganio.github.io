import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions.component';
@NgModule({
  declarations: [
      SubscriptionsComponent,
      // SubscriptionPreviewComponent,
      // MySubscriptionsComponent,
      // StudentSubscriptionPreviewComponent,
      // TeacherSubscriptionPreviewComponent,
      // BloggerSubscriptionPreviewComponent
    ],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    AngularMaterialModule,
    // NgxLoadingModule.forRoot({
    //   animationType: ngxLoadingAnimationTypes.threeBounce,
    //   primaryColour: '#88078e',
    //   secondaryColour: '#c6ef23',
    // }),
  ],
  entryComponents: [
    // SubscriptionPreviewComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SubscriptionsModule { }
