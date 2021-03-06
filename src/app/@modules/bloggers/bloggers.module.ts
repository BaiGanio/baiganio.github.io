import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { BloggersComponent } from './bloggers.component';
import { BloggersRoutingModule } from './bloggers-routing.module';
import { BloggerComponent } from './views/blogger/blogger.component';

@NgModule({
  declarations: [
    BloggersComponent,
    BloggerComponent
  ],
  imports: [
    CommonModule,
    BloggersRoutingModule,
    AngularMaterialModule,
    // StoreModule.forRoot({ bloggers: bloggersReducer }),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      primaryColour: '#88078e',
      secondaryColour: '#c6ef23',
      backdropBorderRadius: '14px',
      fullScreenBackdrop: true
    }),
  ],
  entryComponents: [
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class BloggersModule { }
