import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BloggersComponent } from './bloggers.component';
import { BloggerComponent } from './components/blogger/blogger.component';

const routes: Routes = [
  { path: '', component: BloggersComponent },
  { path: ':id',
    children: [
      {path: '', component: BloggerComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloggersRoutingModule { }
