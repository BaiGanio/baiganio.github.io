import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './@pages/blog/blog.component';
import { HomeComponent } from './@pages/home/home.component';
import { LoginComponent } from './@pages/login/login.component';
import { RegisterComponent } from './@pages/register/register.component';
import { AccessDeniedComponent } from './@shared/pages/access-denied/access-denied.component';
import { ErrorComponent } from './@shared/pages/error/error.component';
import { NotFoundComponent } from './@shared/pages/not-found/not-found.component';
import { ServerAlertComponent } from './@shared/pages/server-alert/server-alert.component';


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
    path: 'server-alert',
    component: ServerAlertComponent
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
