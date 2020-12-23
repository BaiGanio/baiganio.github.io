import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './@pages/home/home.component';
import { LoginComponent } from './@pages/login/login.component';
import { RegisterComponent } from './@pages/register/register.component';
import { AccessDeniedComponent } from './@pages/access-denied/access-denied.component';
import { ErrorComponent } from './@components/errors/error/error.component';
import { ForgottenPasswordComponent } from './@pages/fotgotten-password/forgotten-password.component';
import { NotFoundComponent } from './@pages/not-found/not-found.component';
import { ServerAlertComponent } from './@pages/server-alert/server-alert.component';
import { RoleGuard } from './@core/role.guard';
import { ConfirmationComponent } from './@pages/confirmation/confirmation.component';
import { WelcomeComponent } from './@pages/welcome/welcome.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'subscriptions',
    loadChildren : () => import('./@modules/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)
  },
  {
    path: 'courses',
    loadChildren : () => import('./@modules/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'blogs',
    loadChildren : () => import('./@modules/blogs/blogs.module').then(m => m.BlogsModule),
      // canActivate: [RoleGuard],
  },
  {
    path: 'teachers',
    loadChildren : () => import('./@modules/teachers/teachers.module').then(m => m.TeachersModule)
    // canActivate: [RoleGuard],
    // data: {
    //   allowedRoles: ['admin', 'Teacher']
    // }
  },
  {
    path: 'account',
    loadChildren : () => import('./@modules/account/account.module').then(m => m.AccountModule)
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
    path: 'profile',
    loadChildren : () => import('./@modules/profile/profile.module').then(m => m.ProfileModule)
    // canActivate: [RoleGuard],
    // data: {
    //   expectedRole: 'Member'
    // }
  },
  { path: 'server-alert', component: ServerAlertComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'confirmation/:token', component: ConfirmationComponent },
  { path: 'forgotten-password', component: ForgottenPasswordComponent },
  { path: 'error', component: ErrorComponent},
  { path: '403', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
