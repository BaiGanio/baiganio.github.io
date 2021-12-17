import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { BloggersRoutingModule } from './bloggers-routing.module';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { BloggerComponent } from './components/blogger/blogger.component';
import { BloggersComponent } from './bloggers.component';
import { BloggerCraftsmanViewComponent } from './components/blogger-craftsman-view/blogger-craftsman-view.component';
import { WtfComponent } from './components/wtf/wtf.component';

@NgModule({
  declarations: [
    BloggerComponent,
    BloggersComponent,
    CreatePostComponent,
    EditPostComponent,
    BloggerCraftsmanViewComponent,
    WtfComponent
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
