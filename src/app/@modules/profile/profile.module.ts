import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Subscribe4NotificationsComponent } from './components/subscribe4notifications/subscribe4notifications.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PassStrengthComponent } from './components/pass-strength/pass-strength.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

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
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      primaryColour: '#88078e',
      secondaryColour: '#c6ef23',
      backdropBorderRadius: '14px',
      fullScreenBackdrop: true
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
