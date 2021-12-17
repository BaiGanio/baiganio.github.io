import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { InvalidLoginComponent } from '../profile/components/invalid-login.component';
import { ReportIssueComponent } from './pages/report-issue/report-issue.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ForgottenPasswordComponent } from './pages/fotgotten-password/forgotten-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AccountComponent,
    InvalidLoginComponent,
    ReportIssueComponent,
    ForgottenPasswordComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,,
    CommonModule,
    AccountRoutingModule,
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
    InvalidLoginComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AccountModule { }
