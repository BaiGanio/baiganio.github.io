import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './@modules/home/home.component';
import { ServerAlertComponent } from './@shared/components/server-alert/server-alert.component';
import { LoginComponent } from './@modules/auth/login/login.component';
import { RegisterComponent } from './@modules/auth/register/register.component';
import { ForgottenPasswordComponent } from './@modules/account/pages/fotgotten-password/forgotten-password.component';
import { AccessDeniedComponent } from './@shared/components/access-denied/access-denied.component';
import { ConfirmationComponent } from './@modules/account/pages/confirmation/confirmation.component';
import { NotFoundComponent } from './@shared/components/not-found/not-found.component';
import { WelcomeComponent } from './@modules/home/welcome/welcome.component';
import { RoleGuard } from './@core/role.guard';
import { LinechartComponent } from './@shared/components/charts/linechart/linechart.component';
import { QuestionnaireComponent } from './@shared/components/questionnaire/questionnaire.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
    path: 'courses',
    loadChildren : () => import('./@modules/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'subscriptions',
    loadChildren : () => import('./@modules/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)
  },
  {
    path: 'profile',
    loadChildren : () => import('./@modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'Member'
    }
  },
  {
    path: 'dashboard',
    loadChildren : () => import('./@modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'Member'
    }
  },
  {
    path: 'teachers',
    loadChildren : () => import('./@modules/teachers/teachers.module').then(m => m.TeachersModule),
    canActivate: [RoleGuard],
    data: {
      allowedRoles: ['admin', 'Teacher']
    }
  },
  {
    path: 'account',
    loadChildren : () => import('./@modules/account/account.module').then(m => m.AccountModule)
  },
  {
      path: 'server-alert',
      component: ServerAlertComponent
  },
  {
    path: 'quest',
    component: QuestionnaireComponent
},
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
      path: '403',
      component: AccessDeniedComponent
  },
  {
    path: 'forgotten-password',
    component: ForgottenPasswordComponent
  },
  {
    path: 'confirmation/:token',
    component: ConfirmationComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'linechart', component: LinechartComponent

  },
  {
      path: '**',
      component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
