import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { FooterComponent } from './@modules/footer/footer.component';
import { HomeComponent } from './@modules/home/home.component';
import { NavbarComponent } from './@modules/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './@core/core.module';
import { ServerAlertComponent } from './@shared/components/server-alert/server-alert.component';
import { LoginComponent } from './@modules/auth/login/login.component';
import { RegisterComponent } from './@modules/auth/register/register.component';
import { ForgottenPasswordComponent } from './@modules/account/pages/fotgotten-password/forgotten-password.component';

import { AccessDeniedComponent } from './@shared/components/access-denied/access-denied.component';
import { ConfirmationComponent } from './@modules/account/pages/confirmation/confirmation.component';
import { NotFoundComponent } from './@shared/components/not-found/not-found.component';
import { PrivacyComponent } from './@shared/components/privacy/privacy.component';
import { TermsComponent } from './@shared/components/terms/terms.component';
import { WelcomeComponent } from './@modules/home/welcome/welcome.component';
import { ErrorComponent } from './@shared/components/error/error.component';
import { JwtModule } from '@auth0/angular-jwt';
import { QuestionnaireComponent } from './@shared/components/questionnaire/questionnaire.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './@core/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ServerAlertComponent,
    LoginComponent,
    RegisterComponent,
    AccessDeniedComponent,
    ForgottenPasswordComponent,
    ConfirmationComponent,
    NotFoundComponent,
    PrivacyComponent,
    TermsComponent,
    WelcomeComponent,
    ErrorComponent,
    QuestionnaireComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    // NgxLoadingModule.forRoot({
    //   animationType: ngxLoadingAnimationTypes.threeBounce,
    //   primaryColour: '#88078e',
    //   secondaryColour: '#c6ef23',
    //   backdropBorderRadius: '14px',
    //   fullScreenBackdrop: true
    // }),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      backgroundStroke: '#000000',
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    }),
    // CoursesModule,
    // ProfileModule,
    // DashboardModule,
    // SubscriptionsModule,
    // BlogsModule,
    // AccountModule,
    // TeachersModule,
    // CookieLawModule,
  ],
  entryComponents: [
    TermsComponent,
    PrivacyComponent,
    ErrorComponent,
    QuestionnaireComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

export function jwtTokenGetter() {
  return localStorage.getItem('bg-bcof');
}
