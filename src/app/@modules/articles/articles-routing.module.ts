import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },

  // {
  //   path: 'articles',
  //   children: [
  //     { path: '', component: ArticlesComponent },
  //     { path: ':title', component: ArticlePreviewComponent }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
