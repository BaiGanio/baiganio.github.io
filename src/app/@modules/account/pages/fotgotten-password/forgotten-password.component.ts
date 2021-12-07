import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/@services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
    selector: 'app-forgotten-password',
    templateUrl: 'forgotten-password.component.html',
    styleUrls: ['forgotten-password.component.scss']
})
export class ForgottenPasswordComponent implements OnInit {
    forgotPassForm: FormGroup = new FormGroup({});
    loading = false;
    successFlag = false;
    resetPasswordErrorFlag = false;
    resetPasswordErrorMessage = '';

    constructor(
        private accountService: AccountService,
        private errorHandlerService: ErrorHandlerService,
        private formBuilder: FormBuilder
    ) {
      this.forgotPassForm =
            this.formBuilder.group({
                email: [
                    null,
                    [Validators.required, Validators.email]
                ]
            });
    }

    ngOnInit() {
        this.forgotPassForm =
            this.formBuilder.group({
                email: [
                    null,
                    [Validators.required, Validators.email]
                ]
            });
    }
    public checkError = (controlName: string, errorName: string) => {
      return this.forgotPassForm.controls[controlName].hasError(errorName);
    }
    sendResetLink(data: any) {
        this.loading = true;
        this.accountService.forgotPassword({email: this.forgotPassForm.value.email.trim()})
            .subscribe(
                () => {
                    this.successFlag = true;
                    this.forgotPassForm.reset();
                    this.loading = false;
                },
                error => {
                    this.forgotPassForm.reset();
                    //this.resetPasswordErrorFlag = true;
                    this.loading = false;
                    this.errorHandlerService.handleRequestError(error);
                }
            );
    }

    dismiss() {
        this.successFlag = false;
        this.resetPasswordErrorFlag = false;
        this.resetPasswordErrorMessage = '';
    }
}
