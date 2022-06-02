import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Subscribe4NotificationsComponent } from './components/subscribe4notifications/subscribe4notifications.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PassStrengthComponent } from './components/pass-strength/pass-strength.component';
import { DeleteProfileComponent } from './components/delete-profile/delete-profile.component';

@NgModule({
    declarations: [
        ProfileComponent,
        Subscribe4NotificationsComponent,
        ChangePasswordComponent,
        PassStrengthComponent,
        DeleteProfileComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        AngularMaterialModule,
        ReactiveFormsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }
