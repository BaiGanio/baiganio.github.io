import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { CoursePreviewComponent } from './components/course-preview/course-preview.component';
import { MyCoursesComponent } from './views/my-courses/my-courses.component';
import { CourseDetailsComponent } from './views/course-details/course-details.component';
import { InClassComponent } from './components/in-class/in-class.component';
import { ScoreComponent } from './components/score/score.component';
import { PiechartComponent } from 'src/app/@components/charts/piechart/piechart.component';
import { BarchartComponent } from 'src/app/@components/charts/barchart/barchart.component';
import { DoughnutComponent } from 'src/app/@components/charts/doughnut/doughnut.component';
import { LinechartComponent } from 'src/app/@components/charts/linechart/linechart.component';
import { PolarareaComponent } from 'src/app/@components/charts/polararea/polararea.component';
import { CoursesDetailsComponent } from './views/courses-details/courses-details.component';

@NgModule({
    declarations: [
        CoursesComponent,
        CoursePreviewComponent,
        MyCoursesComponent,
        CourseDetailsComponent,
        CoursesDetailsComponent,
        InClassComponent,
        ScoreComponent,
        LinechartComponent,
        BarchartComponent,
        DoughnutComponent,
        PiechartComponent,
        PolarareaComponent
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        AngularMaterialModule,
    ],
    exports: [CourseDetailsComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CoursesModule { }
