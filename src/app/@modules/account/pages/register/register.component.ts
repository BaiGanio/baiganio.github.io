import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/@services/account.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { TermsComponent } from 'src/app/@pages/terms/terms.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: UntypedFormGroup;
  ipinfo: any;
  loading = false;
  registrationError = false;
  registrationErrorMessage = '';
  registrationSuccess = false;
  registrationSuccessMessage = '';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private http: HttpClient,
    private accountService: AccountService,
    private errorHandlerService: ErrorHandlerService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.registerForm =
      this.formBuilder.group({
        email: [
          null,
          [Validators.required, Validators.email]
        ],
        password: [
          null,
          [Validators.required, Validators.minLength(6), Validators.maxLength(50)]
        ],
        acceptedTerms: [
          false,
          [Validators.requiredTrue]
        ]
      });
  }

  register() {
    this.loading = true;
    this.http.get(environment.IPCheckingServiceUrl)
      .subscribe(
        response => {
          this.ipinfo = response;
        },
        error => {
          console.log(error);
        },
        () => {
          this.doRegistration();
        }
    );
  }

  doRegistration() {
    this.accountService.registerUser({
      Email: this.registerForm.value.email,
      Password: this.registerForm.value.password,
      LeadSource: 'BaiGanio',
      IP: this.ipinfo?.ip
    }).subscribe(
        () => {
          this.registrationSuccess = true;
          this.registrationSuccessMessage = 'Your registration request is on the fly...<br/>Please check your email for confirmation link!';
          this.loading = false;
          this.registerForm.reset();
        }, error => {
          this.registrationError = true;
          this.registrationErrorMessage = `Ooops... Try once more?!?!<br/>${error.error}`;
          this.loading = false;
          this.registerForm.reset();
        }
      );
  }

  getTerms() {
    this.loading = true;
    const $dialogRef = this.dialog.open(TermsComponent, null);
    $dialogRef.afterClosed().subscribe();
    this.loading = false;
  }

  private getRegistrationErrorMessage(error: string) {
    this.registrationErrorMessage =
    `Ops... <br/> ${error} <br/> Try once more?!?!`;
    this.registrationError = true;
  }

  private getSuccessfulSnackBar(email: string) {
    this.snackbar.open(
      `Registration successful for ${email}!`,
      'X',
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: 'successSnackbar'
      }
    );
  }

  dismiss() {
    this.registrationError = false;
    this.registrationErrorMessage = '';
    this.registrationSuccess = false;
    this.registrationSuccessMessage = '';
  }
}
