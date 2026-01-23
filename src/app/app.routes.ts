import { Routes } from '@angular/router';
import { HomeComponent } from './@pages/home/home.component';
import { NotFoundComponent } from './@components/not-found/not-found.component';
import { BgTeamComponent } from './@pages/bg-team/bg-team.component';
import { FoodCostComponent } from './@pages/food-cost/food-cost.component';
import { CoursesComponent } from './@pages/courses/courses.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'food-cost', component: FoodCostComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'bg-team', component: BgTeamComponent },
    { path: '**', component: NotFoundComponent }
];
