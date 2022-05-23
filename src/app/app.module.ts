import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './@core/angular-material.module';
import { CoreModule } from './@core/core.module';
import { HomeComponent } from './@pages/home/home.component';
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
import { LoginComponent } from './@modules/account/pages/login/login.component';
import { RegisterComponent } from './@modules/account/pages/register/register.component';
import { NavbarComponent } from './@components/navbar/navbar.component';
import { UnauthorizedComponent } from './@components/errors/unauthorized/unauthorized.component';
import { DashboardModule } from './@modules/dashboard/dashboard.module';
import { ProfileModule } from './@modules/profile/profile.module';
import { AccountModule } from './@modules/account/account.module';
import { QuestionnaireComponent } from './@components/questionnaire/questionnaire.component';
import { ServerErrorComponent } from './@components/errors/server-error/server-error.component';
import { BadRequestComponent } from './@components/errors/bad-request/bad-request.component';
import { BgTeamComponent } from './@pages/bg-team/bg-team.component';
import { RateComponent } from './@components/errors/rate/rate.component';
import { BloggersModule } from './@modules/bloggers/bloggers.module';
import { AccessDeniedComponent } from './@pages/access-denied/access-denied.component';
import { NgbdCarouselBasicComponent } from './@components/ngbd-carousel-basic/ngbd-carousel-basic.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './@store/reducers/user.reducer';
import { LoadingEffects } from './@store/effects/loading.effects';
import { loadingReducer } from './@store/reducers/loading.reducer';
import { PlaylistItemsComponent } from './@pages/playlists/playlist-items/playlist-items.component';
import { PlaylistsComponent } from './@pages/playlists/playlists.component';
import { tutorialReducer } from './@store/reducers/tutorial.reducer';
import { TeachersModule } from './@modules/teachers/teachers.module';
import { TodosComponent } from './@pages/todos/todos.component';
import { CreateToDoComponent } from './@pages/todos/create-todo/create-todo.component';
import { DeleteToDoComponent } from './@pages/todos/delete-todo/delete-todo.component';
import { UpdateToDoComponent } from './@pages/todos/update-todo/update-todo.component';
import { WorkbenchModule } from './@modules/workbench/workbench.module';
import { ProjectsComponent } from './@pages/projects/projects.component';
import { ArticlesComponent } from './@pages/articles/articles.component';
import { ArticlePreviewComponent } from './@pages/articles/article-preview/article-preview.component';
import { SearchFilterPipe } from './@shared/pipes/search-filter.pipe';

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
        ErrorComponent,
        UnauthorizedComponent,
        QuestionnaireComponent,
        ServerErrorComponent,
        BadRequestComponent,
        BgTeamComponent,
        RateComponent,
        PlaylistsComponent,
        NgbdCarouselBasicComponent,
        PlaylistItemsComponent,
        TodosComponent,
        CreateToDoComponent,
        DeleteToDoComponent,
        UpdateToDoComponent,
        ProjectsComponent,
        ArticlesComponent,
        ArticlePreviewComponent,
        SearchFilterPipe,
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
        BloggersModule,
        TeachersModule,
        WorkbenchModule,
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
        StoreModule.forRoot({
            user: userReducer,
            loading: loadingReducer,
            // history: historyReducer
            tutorial: tutorialReducer
        }),
        EffectsModule.forRoot([
            LoadingEffects,
           // UserEffects,
            // HistoryEffects
        ]),
    ],
    providers: [CoreModule],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

export function jwtTokenGetter() {
  return localStorage.getItem('bg-bcof');
}
