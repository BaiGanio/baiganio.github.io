import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { CraftsmanMenuComponent } from './views/craftsman-menu.component';
import { TeacherDetailsComponent } from './views/teacher-details/teacher-details.component';
import { CoursesDetailsComponent } from '../courses/views/courses-details/courses-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TeachersComponent },
      { path: 'craftsman-menu', component: CraftsmanMenuComponent },
      { path: 'craftsman-menu/courses', component: CoursesDetailsComponent },
      { path: ':id', component: TeacherDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TeachersRoutingModule { }
