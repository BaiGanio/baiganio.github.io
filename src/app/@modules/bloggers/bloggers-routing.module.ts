import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BloggersComponent } from './bloggers.component';
import { BloggerComponent } from './views/blogger/blogger.component';

const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', component: BloggersComponent }
      ]
    },
    { path: ':id', component: BloggerComponent }
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
export class BloggersRoutingModule {
  static components = [
    BloggerComponent,
    BloggersComponent
  ];
}
