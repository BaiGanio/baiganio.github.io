import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './@pages/home/home.component';
import { ErrorComponent } from './@components/errors/error/error.component';
import { NotFoundComponent } from './@pages/not-found/not-found.component';
import { ServerAlertComponent } from './@pages/server-alert/server-alert.component';
import { RoleGuard } from './@core/role.guard';
import { BgTeamComponent } from './@pages/bg-team/bg-team.component';
import { AccessDeniedComponent } from './@pages/access-denied/access-denied.component';
import { PlaylistItemsComponent } from './@pages/playlists/playlist-items/playlist-items.component';
import { PlaylistsComponent } from './@pages/playlists/playlists.component';
import { ChartComponent } from './@modules/workbench/chart/chart.component';
import { TodosComponent } from './@pages/todos/todos.component';
import { ProjectsComponent } from './@pages/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bg-team', component: BgTeamComponent },
  { path: 'videos', component: PlaylistsComponent },
  { path: 'playlist-items', component: PlaylistItemsComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'projects', component: ProjectsComponent },
  {
    path: 'workbench',
    loadChildren : () => import('./@modules/workbench/workbench.module').then(m => m.WorkbenchModule)
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
    path: 'bloggers',
    loadChildren : () => import('./@modules/bloggers/bloggers.module').then(m => m.BloggersModule),
      // canActivate: [RoleGuard],
  },
  {
    path: 'teachers',
    loadChildren : () => import('./@modules/teachers/teachers.module').then(m => m.TeachersModule),
    // canActivate: [RoleGuard],
    // data: {
    //   allowedRoles: ['Teacher']
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
      allowedRoles: ['Member']
    }
  },
  {
    path: 'profile',
    loadChildren : () => import('./@modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [RoleGuard],
    data: {
      allowedRoles: ['Member']
    }
  },
  { path: 'chart', component: ChartComponent },
  { path: 'server-alert', component: ServerAlertComponent },
  { path: 'error', component: ErrorComponent},
  { path: '403', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
