import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './@pages/blog/blog.component';
import { HomeComponent } from './@pages/home/home.component';
import { LoginComponent } from './@pages/login/login.component';
import { RegisterComponent } from './@pages/register/register.component';
import { AccessDeniedComponent } from './@pages/access-denied/access-denied.component';
import { ErrorComponent } from './@components/error/error.component';
import { ForgottenPasswordComponent } from './@pages/fotgotten-password/forgotten-password.component';
import { NotFoundComponent } from './@pages/not-found/not-found.component';
import { ServerAlertComponent } from './@pages/server-alert/server-alert.component';


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
      path: 'blog',
      component: BlogComponent
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
    path: 'subscriptions',
    loadChildren : () => import('./@modules/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)
  },
  {
    path: 'courses',
    loadChildren : () => import('./@modules/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'server-alert',
    component: ServerAlertComponent
  },
  {
    path: 'forgotten-password',
    component: ForgottenPasswordComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '403',
    component: AccessDeniedComponent
  } ,
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
