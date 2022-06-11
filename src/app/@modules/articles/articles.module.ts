import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { BloggerCraftsmanViewComponent } from './blogger-craftsman-view/blogger-craftsman-view.component';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    BloggerCraftsmanViewComponent,
    CreateArticleComponent,
    EditArticleComponent,
    DeleteArticleComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    AngularMaterialModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
  schemas:[NO_ERRORS_SCHEMA]
})
export class ArticlesModule { }
