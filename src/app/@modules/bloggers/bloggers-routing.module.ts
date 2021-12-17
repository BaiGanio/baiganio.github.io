import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BloggersComponent } from './bloggers.component';
import { BloggerComponent } from './components/blogger/blogger.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { BloggerCraftsmanViewComponent } from './components/blogger-craftsman-view/blogger-craftsman-view.component';
import { WtfComponent } from './components/wtf/wtf.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: BloggersComponent },
      { path: ':id', component: BloggerComponent },

    ]
  },
    // { path: '', component: BloggersComponent },
    // { path: ':id', component: BloggerComponent },
    { path: 'blogger-craftsman', component: BloggerCraftsmanViewComponent },
    { path: 'create-post', component: CreatePostComponent },
    { path: 'edit-post', component: EditPostComponent },
    { path: 'wtf', component: WtfComponent }

    // {
    //   path: 'preview',
    //   children: [
    //     { path: '', component: MyCoursesComponent },
    //     { path: ':id', component: CourseDetailsComponent }
    //   ]
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloggersRoutingModule { }
