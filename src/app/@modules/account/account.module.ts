

// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { InvalidLoginComponent } from '../profile/components/invalid-login.component';
import { ReportIssueComponent } from './pages/report-issue/report-issue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AccountComponent,
    InvalidLoginComponent,
    ReportIssueComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    AngularMaterialModule,
    // NgxLoadingModule.forRoot({
    //   animationType: ngxLoadingAnimationTypes.threeBounce,
    //   primaryColour: '#88078e',
    //   secondaryColour: '#c6ef23',
    // }),
  ],
  entryComponents: [
    InvalidLoginComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AccountModule { }
