import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { TeacherDetailsComponent } from './views/teacher-details/teacher-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TeachersComponent },
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
