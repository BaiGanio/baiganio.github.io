import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { BloggersRoutingModule } from './bloggers-routing.module';
import { BloggerComponent } from './components/blogger/blogger.component';
import { BloggersComponent } from './bloggers.component';
import { BloggerCraftsmanViewComponent } from './components/blogger-craftsman-view/blogger-craftsman-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from "@tinymce/tinymce-angular";
import { ArticlesComponent } from './components/blogger/articles/articles.component';
import { CreateArticleComponent } from './components/blogger/articles/create-article/create-article.component';
import { RemoveArticleComponent } from './components/blogger/articles/remove-article/remove-article.component';
import { EditArticleComponent } from './components/blogger/articles/edit-article/edit-article.component';
import { ArticlePreviewComponent } from 'src/app/@pages/articles/article-preview/article-preview.component';

@NgModule({
    declarations: [
        BloggersComponent,
        BloggerComponent,
        BloggerCraftsmanViewComponent,
        ArticlesComponent,
        CreateArticleComponent,
        RemoveArticleComponent,
        EditArticleComponent,
    ],
    imports: [
        CommonModule,
        BloggersRoutingModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        // StoreModule.forRoot({ bloggers: bloggersReducer }),
        EditorModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class BloggersModule { }
