import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { BloggerCraftsmanViewComponent } from './blogger-craftsman-view/blogger-craftsman-view.component';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },

  {
    path: 'blogger-craftsman', component: BloggerCraftsmanViewComponent
    // children: [
    //   { path: '', component: ArticlesComponent },
    //   { path: ':title', component: ArticlePreviewComponent }
    // ]
  },
  { path: 'create', component: CreateArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
