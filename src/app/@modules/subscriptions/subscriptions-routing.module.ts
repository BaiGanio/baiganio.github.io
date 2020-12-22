import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubscriptionsComponent } from './subscriptions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SubscriptionsComponent }
    ]
  },
  // {
  //   path: 'preview',
  //   children: [
  //     { path: '', component: MySubscriptionsComponent },
  //     // { path: ':id', component: CourseDetailsComponent }
  //   ]
  // }
  // { path: ':token', component: SubscriptionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubscriptionsRoutingModule { }