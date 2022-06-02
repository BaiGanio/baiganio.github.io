import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeachersRoutingModule } from './teachers-routing-module.module';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { TeachersComponent } from './teachers.component';
import { TeacherDetailsComponent } from './views/teacher-details/teacher-details.component';
import { EditCourseComponent } from '../courses/components/edit-course/edit-course.component';
import { DeleteCourseComponent } from '../courses/components/delete-course/delete-course.component';
import { CreateCourseComponent } from '../courses/components/create-course/create-course.component';
import { TeacherPreviewComponent } from './component/teacher-preview/teacher-preview.component';
import { VoteForTeacherComponent } from './component/vote-for-teacher/vote-for-teacher.component';

@NgModule({
    declarations: [
        TeachersComponent,
        TeacherDetailsComponent,
        CreateCourseComponent,
        EditCourseComponent,
        DeleteCourseComponent,
        TeacherPreviewComponent,
        VoteForTeacherComponent
    ],
    imports: [
        CommonModule,
        TeachersRoutingModule,
        AngularMaterialModule,
        ReactiveFormsModule
    ]
})
export class TeachersModule { }
