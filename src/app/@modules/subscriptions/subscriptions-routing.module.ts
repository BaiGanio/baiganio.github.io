import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubscriptionsComponent } from './subscriptions.component';
import { MySubscriptionsComponent } from './pages/my-subscriptions/my-subscriptions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SubscriptionsComponent },
      { path: 'preview', component: MySubscriptionsComponent }
    ]
  },
  { path: ':token', component: SubscriptionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SubscriptionsRoutingModule { }
