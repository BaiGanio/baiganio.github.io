import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './@pages/access-denied/access-denied.component';
import { BlogComponent } from './@pages/blog/blog.component';
import { HomeComponent } from './@pages/home/home.component';
import { LoginComponent } from './@pages/login/login.component';
import { NotFoundComponent } from './@pages/not-found/not-found.component';
import { RegisterComponent } from './@pages/register/register.component';
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
    path: 'server-alert',
    component: ServerAlertComponent
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
