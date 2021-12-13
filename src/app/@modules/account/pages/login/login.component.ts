import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { SubscriptionsModule } from 'src/app/@modules/subscriptions/subscriptions.module';
import { UserView } from 'src/app/@modules/users/models/user-view';
import { AuthService } from 'src/app/@services/auth.service';
import { BackendService } from 'src/app/@services/backend.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { UserDataService } from 'src/app/@services/user-data.service';
import { SelectUserAction } from 'src/app/@store/actions/user.actions';
import { AppState, UserState } from 'src/app/@store/app.state';
import { selectUser } from 'src/app/@store/selectors/user.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  retryFunction = null;
  user: UserView;
  loading = false;
  loginError = false;
  loginErrorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private authservice: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private userDataService: UserDataService,
    private store: Store<AppState>
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
        let token = response;
        if (this.loginForm.value.rememberMe) {
          this.authservice.setUserTokenAndRemember(response);
        } else {
          this.authservice.clearUserToken();
          this.authservice.userToken = response;
        }
        this.store.dispatch(new SelectUserAction());
        this.updateLastLogin();
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.loginError = true;
        this.loginForm.reset();
        this.loginErrorMessage = error.error.error_description;
        this.loading = false;
      });
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
