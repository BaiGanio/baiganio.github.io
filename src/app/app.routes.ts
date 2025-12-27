import { Routes } from '@angular/router';
import { HomeComponent } from './@pages/home/home.component';
import { NotFoundComponent } from './@components/not-found/not-found.component';
import { BgTeamComponent } from './@pages/bg-team/bg-team.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'bg-team', component: BgTeamComponent },
    { path: '**', component: NotFoundComponent }
];
