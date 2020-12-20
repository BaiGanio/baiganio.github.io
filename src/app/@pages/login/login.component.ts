import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  retryFunction = null;
  // user: UserViewModel;
  loading = false;
  loginError = false;
  loginErrorMessage = '';

  constructor(
     private formBuilder: FormBuilder,
     private router: Router,
    // private backendService: BackendService,
    // private authservice: AuthService,
    // private errorHandlerService: ErrorHandlerService,
    // private userDataService: UserDataService
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

    //this.authservice.clearUserToken();
  }

  // sendLoginRequest() {
  //   this.loading = true;
  //   this.backendService.getUserAccessToken(
  //     this.loginForm.value.email,
  //     this.loginForm.value.password
  //   ).subscribe(
  //       response => this.handleSuccess(response),
  //       error => {
  //         console.log(error);
  //         this.loading = false;
  //         this.loginForm.reset();
  //         this.loginErrorMessage =
  //         `Ops... <br/> ${error.error.error_description}! <br/>`;
  //         this.loginError = true;
  //       }
  //     );
  // }

  // private handleSuccess(authToken): void {
  //   if (this.loginForm.value.rememberMe) {
  //     this.authservice.setUserTokenAndRemember(authToken);
  //   } else {
  //     this.authservice.clearUserToken();
  //     this.authservice.userToken = authToken;
  //   }
  //   this.getUserByToken();
  //   this.loading = false;
  //   this.router.navigate(['/dashboard']);
  // }

  // getUserByToken(): void {
  //   let userData: any;
  //   let username = '';
  //   this.userDataService.getUserByToken()
  //     .subscribe(response => {
  //         userData = response.body;
  //         this.userDataService.setUserData(userData);
  //         username =
  //           userData.first_name != null && userData.last_name != null
  //           ? userData.first_name + ' ' + userData.last_name
  //           : userData.email;

  //         this.updateLastLogin();
  //       },
  //       error => {
  //         this.errorHandlerService.handleRequestError(error);
  //       }
  //     );
  // }

  // dismiss() {
  //   this.loginError = false;
  //   this.loginErrorMessage = '';
  // }

  // updateLastLogin() {
  //   this.userDataService.updateLastLoginDate().subscribe(
  //     () => {},
  //     err => { console.log(err); }
  //   );

  // }

}
