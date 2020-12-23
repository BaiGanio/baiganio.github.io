import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './@core/angular-material.module';
import { CoreModule } from './@core/core.module';
import { HomeComponent } from './@pages/home/home.component';
import { AccessDeniedComponent } from './@pages/access-denied/access-denied.component';
import { ErrorComponent } from './@components/errors/error/error.component';
import { NotFoundComponent } from './@pages/not-found/not-found.component';
import { PrivacyComponent } from './@pages/privacy/privacy.component';
import { ServerAlertComponent } from './@pages/server-alert/server-alert.component';
import { TermsComponent } from './@pages/terms/terms.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './@pages/footer/footer.component';
import { CoursesModule } from './@modules/courses/courses.module';
import { SubscriptionsModule } from './@modules/subscriptions/subscriptions.module';
import { HttpClientModule } from '@angular/common/http';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './@pages/login/login.component';
import { RegisterComponent } from './@pages/register/register.component';
import { ForgottenPasswordComponent } from './@pages/fotgotten-password/forgotten-password.component';
import { NavbarComponent } from './@components/navbar/navbar.component';
import { UnauthorizedComponent } from './@components/errors/unauthorized/unauthorized.component';
import { DashboardModule } from './@modules/dashboard/dashboard.module';
import { ProfileModule } from './@modules/profile/profile.module';
import { AccountModule } from './@modules/account/account.module';
import { QuestionnaireComponent } from './@components/questionnaire/questionnaire.component';
import { ServerErrorComponent } from './@components/errors/server-error/server-error.component';
import { BadRequestComponent } from './@components/errors/bad-request/bad-request.component';
import { ConfirmationComponent } from './@pages/confirmation/confirmation.component';
import { BlogsModule } from './@modules/blogs/blogs.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ServerAlertComponent,
    AccessDeniedComponent,
    NotFoundComponent,
    PrivacyComponent,
    TermsComponent,
    ForgottenPasswordComponent,
    ConfirmationComponent,
    ErrorComponent,
    UnauthorizedComponent,
    QuestionnaireComponent,
    ServerErrorComponent,
    BadRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    CoreModule,
    AccountModule,
    DashboardModule,
    ProfileModule,
    CoursesModule,
    SubscriptionsModule,
    BlogsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    }),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      primaryColour: '#88078e',
      secondaryColour: '#c6ef23',
      backdropBorderRadius: '14px',
      fullScreenBackdrop: true
    }),
  ],
  entryComponents: [
    TermsComponent,
    PrivacyComponent,
    ErrorComponent,
    UnauthorizedComponent,
    BadRequestComponent,
    QuestionnaireComponent,
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

export function jwtTokenGetter() {
  return localStorage.getItem('bg-bcof');
}
