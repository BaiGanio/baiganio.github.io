import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { CoursePreviewComponent } from './components/course-preview/course-preview.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { InClassComponent } from './components/in-class/in-class.component';
import { ScoreComponent } from './components/score/score.component';
import { LinechartComponent } from 'src/app/@shared/components/charts/linechart/linechart.component';
import { BarchartComponent } from 'src/app/@shared/components/charts/barchart/barchart.component';
import { DoughnutComponent } from 'src/app/@shared/components/charts/doughnut/doughnut.component';
import { PiechartComponent } from 'src/app/@shared/components/charts/piechart/piechart.component';
import { PolarareaComponent } from 'src/app/@shared/components/charts/polararea/polararea.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AngularMaterialModule
    // NgxLoadingModule.forRoot({
    //   animationType: ngxLoadingAnimationTypes.threeBounce,
    //   primaryColour: '#88078e',
    //   secondaryColour: '#c6ef23',
    // }),
  ],
  declarations: [
    CoursesComponent,
    CoursePreviewComponent,
    MyCoursesComponent,
    CourseDetailsComponent,
    InClassComponent,
    ScoreComponent,
    LinechartComponent,
    BarchartComponent,
    DoughnutComponent,
    PiechartComponent,
    PolarareaComponent
  ],
  entryComponents: [
    CoursePreviewComponent
  ],
  exports: [CourseDetailsComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class CoursesModule { }
