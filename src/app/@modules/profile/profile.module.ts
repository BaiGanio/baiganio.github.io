
// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { ProfileRoutingModule } from './profile-routing.modute';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Subscribe4NotificationsComponent } from './components/subscribe4notifications/subscribe4notifications.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PassStrengthComponent } from './components/pass-strength/pass-strength.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    ProfileComponent,
    Subscribe4NotificationsComponent,
    ChangePasswordComponent,
    PassStrengthComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    // NgxLoadingModule.forRoot({
    //   animationType: ngxLoadingAnimationTypes.threeBounce,
    //   primaryColour: '#88078e',
    //   secondaryColour: '#c6ef23',
    //   backdropBorderRadius: '14px',
    //   fullScreenBackdrop: true
    // }),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      backgroundStroke: '#000000',
    }),
  ],
  entryComponents: [
    Subscribe4NotificationsComponent,
    ChangePasswordComponent,
    PassStrengthComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }
