import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BloggersComponent } from './bloggers.component';
import { BloggerCraftsmanViewComponent } from './components/blogger-craftsman-view/blogger-craftsman-view.component';
import { BloggerComponent } from './components/blogger/blogger.component';
import { ArticlesComponent } from './components/blogger/articles/articles.component';
import { CreateArticleComponent } from './components/blogger/articles/create-article/create-article.component';
import { EditArticleComponent } from './components/blogger/articles/edit-article/edit-article.component';
import { ArticlePreviewComponent } from 'src/app/@pages/articles/article-preview/article-preview.component';

const routes: Routes = [
  { path: '', component: BloggersComponent },
  { path: ':id',
    children: [
      {path: '', component: BloggerComponent},
      { path: 'articles',
        children: [
          { path: '', component: ArticlesComponent },
          { path: 'create', component: CreateArticleComponent },
          { path: 'edit', component: EditArticleComponent },
        ]
      },
    ]
  },
  { path: 'blogger-craftsman', component: BloggerCraftsmanViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloggersRoutingModule { }
