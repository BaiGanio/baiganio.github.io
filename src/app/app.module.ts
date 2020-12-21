import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './@core/angular-material.module';
import { CoreModule } from './@core/core.module';
import { HomeComponent } from './@pages/home/home.component';
import { AccessDeniedComponent } from './@shared/pages/access-denied/access-denied.component';
import { ErrorComponent } from './@shared/pages/error/error.component';
import { NotFoundComponent } from './@shared/pages/not-found/not-found.component';
import { PrivacyComponent } from './@shared/pages/privacy/privacy.component';
import { ServerAlertComponent } from './@shared/pages/server-alert/server-alert.component';
import { TermsComponent } from './@shared/pages/terms/terms.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './@pages/blog/blog.component';
import { FooterComponent } from './@shared/components/footer/footer.component';
import { NavbarComponent } from './@shared/components/navbar/navbar.component';
import { CoursesModule } from './@modules/courses/courses.module';
import { SubscriptionsModule } from './@modules/subscriptions/subscriptions.module';
import { HttpClientModule } from '@angular/common/http';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    BlogComponent,
    ServerAlertComponent,
    AccessDeniedComponent,
    NotFoundComponent,
    PrivacyComponent,
    TermsComponent,
    ErrorComponent,
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
    CoursesModule,
    SubscriptionsModule,
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
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

export function jwtTokenGetter() {
  return localStorage.getItem('bg-bcof');
}
