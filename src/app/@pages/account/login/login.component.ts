import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../@core/angular-material.module';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule, FormsModule, RouterLink, TranslateModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{
  loginForm!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.loginForm =
      this.formBuilder.group({
        email: [
          '',
          [Validators.required, Validators.email]
        ],
        password: [
          '',
          [Validators.required, Validators.minLength(3)]
        ],
        rememberMe: [
          true
        ]
      });

    //this.authservice.clearUserToken();
  }
  sendLoginRequest() {
    // this.loading = true;
    // this.backendService.getUserAccessToken(
    //   this.loginForm.value.email,
    //   this.loginForm.value.password
    // ).subscribe(
    //   response => {
    //     if (this.loginForm.value.rememberMe) {
    //       this.authservice.setUserTokenAndRemember(response);
    //     } else {
    //       this.authservice.clearUserToken();
    //       this.authservice.userToken = response;
    //     }
    //     // this.store.dispatch(new SelectUserAction());
    //     this.updateLastLogin();
    //     this.router.navigate(['/dashboard']);
    //   },
    //   error => {
    //     this.loginError = true;
    //     this.loginForm.reset();
    //     this.loginErrorMessage = error.error.error_description;
    //     this.loading = false;
    //   });
  }
  submitLogin(): void { 
    if (this.loginForm.invalid) return; 
    const { email, password } = this.loginForm.value; 
    console.log('Login request:', { email, password }); 
    // Simulate login fail for demo 
  
    // TODO: call your API here  
    //this.authService.login(email, password).subscribe(...) 
  }
  dismiss() {
   
  }

  updateLastLogin() {
    // this.userDataService.updateLastLoginDate().subscribe(
    //   () => {},
    //   err => { this.errorHandlerService.handleRequestError(err); }
    // );
  }
}
