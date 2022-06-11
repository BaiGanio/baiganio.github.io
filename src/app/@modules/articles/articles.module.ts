import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { BloggerCraftsmanViewComponent } from './blogger-craftsman-view/blogger-craftsman-view.component';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    ArticlesComponent,
    BloggerCraftsmanViewComponent,
    CreateArticleComponent,
    EditArticleComponent,
    DeleteArticleComponent,
    ArticlePreviewComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    AngularMaterialModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }) ,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
  schemas:[NO_ERRORS_SCHEMA]
})
export class ArticlesModule { }
