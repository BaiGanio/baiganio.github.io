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
    forgotPassForm: FormGroup;
    loading = false;
    successFlag = false;
    resetPasswordErrorFlag = false;
    resetPasswordErrorMessage = '';

    constructor(
        private accountService: AccountService,
        private errorHandlerService: ErrorHandlerService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.forgotPassForm = 
            this.formBuilder.group({
                email: [
                    null,
                    [Validators.required, Validators.email]
                ]
            });
    }

    sendResetLink() {
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
                    this.resetPasswordErrorFlag = true;
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
