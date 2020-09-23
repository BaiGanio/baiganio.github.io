import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeachersRoutingModule } from './teachers-routing-module.module';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { TeachersComponent } from './teachers.component';
// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { CraftsmanMenuComponent } from './pages/craftsman-menu.component';
import { TeacherDetailsComponent } from './pages/teacher-details/teacher-details.component';
import { CoursesDetailsComponent } from '../courses/pages/courses-details/courses-details.component';
import { EditCourseComponent } from '../courses/components/edit-course/edit-course.component';
import { DeleteCourseComponent } from '../courses/components/delete-course/delete-course.component';
import { CreateCourseComponent } from '../courses/components/create-course/create-course.component';
import { TeacherPreviewComponent } from './component/teacher-preview/teacher-preview.component';
import { VoteForTeacherComponent } from './component/vote-for-teacher/vote-for-teacher.component';

@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
    // NgxLoadingModule.forRoot({
    //   animationType: ngxLoadingAnimationTypes.threeBounce,
    //   primaryColour: '#88078e',
    //   secondaryColour: '#c6ef23',
    // }),
  ],
  declarations: [
    TeachersComponent,
    CraftsmanMenuComponent,
    TeacherDetailsComponent,
    CreateCourseComponent,
    EditCourseComponent,
    DeleteCourseComponent,
    TeacherPreviewComponent,
    VoteForTeacherComponent
  ],
  entryComponents: [
    CreateCourseComponent,
    EditCourseComponent,
    DeleteCourseComponent,
    TeacherPreviewComponent,
    VoteForTeacherComponent
  ],
})
export class TeachersModule { }
