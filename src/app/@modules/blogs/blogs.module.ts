
import { BlogsComponent } from './blogs.component';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { BlogsRoutingModule } from './blogs-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    AngularMaterialModule,
    // NgxLoadingModule.forRoot({
    //   animationType: ngxLoadingAnimationTypes.threeBounce,
    //   primaryColour: '#88078e',
    //   secondaryColour: '#c6ef23',
    // }),
  ],
  entryComponents: [
    // 
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class BlogsModule { }
