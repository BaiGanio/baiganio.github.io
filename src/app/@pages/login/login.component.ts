import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserViewModel } from 'src/app/@modules/users/models/user-view-model.module';
import { AuthService } from 'src/app/@services/auth.service';
import { BackendService } from 'src/app/@services/backend.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { UserDataService } from 'src/app/@services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  retryFunction = null;
  user: UserViewModel;
  loading = false;
  loginError = false;
  loginErrorMessage = '';

  constructor(
     private formBuilder: FormBuilder,
     private router: Router,
    private backendService: BackendService,
    private authservice: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private userDataService: UserDataService
    ) { }

  ngOnInit() {
    this.loginForm =
      this.formBuilder.group({
        email: [
          null,
          [Validators.required, Validators.email]
        ],
        password: [
          null,
          [Validators.required, Validators.minLength(3)]
        ],
        rememberMe: [
          true
        ]
      });

    this.authservice.clearUserToken();
  }

  sendLoginRequest() {
    this.loading = true;
    this.backendService.getUserAccessToken(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).subscribe(
      response => {
        if (this.loginForm.value.rememberMe) {
          this.authservice.setUserTokenAndRemember(response);
        } else {
          this.authservice.clearUserToken();
          this.authservice.userToken = response;
        }
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.errorHandlerService.handleRequestError(error);
        this.loading = false;
      }, () => { 
        this.getUserByToken();
        this.loading = false; 
        this.loginError = true;
        this.loginForm.reset();
    });

  }

  private handleSuccess(authToken): void {
   
    this.getUserByToken();
  }

  getUserByToken(): void {
    let userData= new UserViewModel();
    let username = '';
    this.userDataService.getUserByToken()
      .subscribe(response => {
          console.log('st ' + response.body);
          this.userDataService.setUserData(userData);
          username =
            userData.FirstName != null && userData.LastName != null
            ? userData.FirstName + ' ' + userData.LastName
            : userData.Email;

          this.updateLastLogin();
        },
        error => {
          this.errorHandlerService.handleRequestError(error);
        },
        () => {
          this.loading = false;
          this.router.navigate(['/dashboard']);
        }
      );
  }

  dismiss() {
    this.loginError = false;
    this.loginErrorMessage = '';
  }

  updateLastLogin() {
    this.userDataService.updateLastLoginDate().subscribe(
      () => {},
      err => { console.log(err); }
    );

  }

}
