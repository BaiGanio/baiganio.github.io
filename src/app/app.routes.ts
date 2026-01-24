import { Routes } from '@angular/router';
import { HomeComponent } from './@pages/home/home.component';
import { NotFoundComponent } from './@components/not-found/not-found.component';
import { BgTeamComponent } from './@pages/bg-team/bg-team.component';
import { FoodCostComponent } from './@pages/food-cost/food-cost.component';
import { CoursesComponent } from './@pages/courses/courses.component';
import { LoginComponent } from './@pages/account/login/login.component';
import { ForgottenPasswordComponent } from './@pages/account/forgotten-password/forgotten-password.component';
import { RegisterComponent } from './@pages/account/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'food-cost', component: FoodCostComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
     { path: 'forgotten-password', component: ForgottenPasswordComponent },
    { path: 'bg-team', component: BgTeamComponent },
    { path: '**', component: NotFoundComponent }
];
