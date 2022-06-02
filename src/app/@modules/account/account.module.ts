import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';

import { ReportIssueComponent } from './pages/report-issue/report-issue.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ForgottenPasswordComponent } from './pages/fotgotten-password/forgotten-password.component';
import { InvalidLoginComponent } from './pages/invalid-login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AccountComponent,
        InvalidLoginComponent,
        ReportIssueComponent,
        ForgottenPasswordComponent,
        ConfirmationComponent,
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        AngularMaterialModule,
        // BrowserAnimationsModule,
        // FormsModule,
        ReactiveFormsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AccountModule { }
