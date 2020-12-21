import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';

import { NgModule } from '@angular/core';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { CoursePreviewComponent } from './components/course-preview/course-preview.component';

const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', component: CoursesComponent }
      ]
    },
    {
      path: 'preview',
      children: [
        { path: '', component: MyCoursesComponent },
        { path: ':id', component: CourseDetailsComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
