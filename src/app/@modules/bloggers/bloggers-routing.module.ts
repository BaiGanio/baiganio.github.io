import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BloggersComponent } from './bloggers.component';

const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', component: BloggersComponent }
      ]
    },
    // {
    //   path: 'preview',
    //   children: [
    //     { path: '', component: MyCoursesComponent },
    //     { path: ':id', component: CourseDetailsComponent }
    //   ]
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloggersRoutingModule { }
