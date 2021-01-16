import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubscriptionsComponent } from './subscriptions.component';
import { MySubscriptionsComponent } from './views/my-subscriptions/my-subscriptions.component';
import { RoleGuard } from 'src/app/@core/role.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SubscriptionsComponent }
    ]
  },
  {
    path: 'preview',
    children: [
      { 
        path: '', 
        component: MySubscriptionsComponent,
        canActivate: [RoleGuard],
        data: {
          allowedRoles: ['Member']
        }
      },
     // { path: ':id', component: CourseDetailsComponent }
    ]
  },
  { path: ':token', component: SubscriptionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubscriptionsRoutingModule { }