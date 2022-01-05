import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BloggersComponent } from './bloggers.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { BloggerCraftsmanViewComponent } from './components/blogger-craftsman-view/blogger-craftsman-view.component';
import { WtfComponent } from './components/wtf/wtf.component';
import { BloggerArticlesComponent } from './components/blogger-articles/blogger-articles.component';
import { BloggerComponent } from './components/blogger/blogger.component';

const routes: Routes = [
  { path: '', component: BloggersComponent },
  { path: ':id',
    children: [
      {path: '', component: BloggerComponent},
      { path: 'articles', component: BloggerArticlesComponent }
    ]
  },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'blogger-craftsman', component: BloggerCraftsmanViewComponent },
  { path: 'edit-post', component: EditPostComponent },
  { path: 'wtf', component: WtfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloggersRoutingModule { }
