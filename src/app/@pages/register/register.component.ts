import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  ipinfo: any;
  loading = false;
  registrationError = false;
  registrationErrorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    // private accountService: AccountService,
    // private errorHandlerService: ErrorHandlerService,
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
    // this.loading = true;
    // this.http.get(environment.IPCheckingServiceUrl)
    //   .subscribe(
    //     response => {
    //       this.ipinfo = response;
    //     },
    //     error => {
    //       this.errorHandlerService.handleRequestError(error);
    //     },
    //     () => {
    //       this.doRegistration();
    //     }
    // );
  }

  doRegistration() {
    // this.accountService.registerUser({
    //   Email: this.registerForm.value.email,
    //   Password: this.registerForm.value.password,
    //   LeadSource: 'WebApp',
    //   IP: this.ipinfo.ip
    // }).subscribe(
    //     () => {
    //       this.router.navigate(['/welcome']);
    //       this.getSuccessfulSnackBar(this.registerForm.value.email);
    //       this.loading = false;
    //     }, error => {
    //       this.registrationError = true;
    //       this.loading = false;
    //       this.registerForm.reset();
    //       this.errorHandlerService.handleRequestError(error);
    //     }
    //   );
  }

  // getTerms() {
  //   this.loading = true;
  //   const $dialogRef = this.dialog.open(TermsComponent, null);
  //   $dialogRef.afterClosed().subscribe();
  //   this.loading = false;
  // }

  // private getRegistrationErrorMessage(error: string) {
  //   this.registrationErrorMessage =
  //   `Ops... <br/> ${error} <br/> Try once more?!?!`;
  //   this.registrationError = true;
  // }

  // private getSuccessfulSnackBar(email: string) {
  //   this.snackbar.open(
  //     `Registration successful for ${email}!`,
  //     'X',
  //     {
  //       duration: 3000,
  //       horizontalPosition: 'center',
  //       verticalPosition: 'top',
  //       panelClass: 'successSnackbar'
  //     }
  //   );
  // }

  // dismiss() {
  //   this.registrationError = false;
  //   this.registrationErrorMessage = '';
  // }
}
