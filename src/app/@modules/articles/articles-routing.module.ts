import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { ArticlesComponent } from './articles.component';
import { BloggerCraftsmanViewComponent } from './blogger-craftsman-view/blogger-craftsman-view.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: ArticlesComponent }
    ]
  },
  { path: ':name', component: ArticlePreviewComponent },
  { path: 'blogger-craftsman', component: BloggerCraftsmanViewComponent },
  // { path: 'create', component: CreateArticleComponent },
  {
    path: 'edit',
    children: [
      { path: ':id', component: EditArticleComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
