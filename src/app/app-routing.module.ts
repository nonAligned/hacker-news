import { CommentsComponent } from './news/comments/comments.component';
import { NewStoriesComponent } from './news/new-stories/new-stories.component';
import { AboutComponent } from './core/about/about.component';
import { TopStoriesComponent } from './news/top-stories/top-stories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"news", component: TopStoriesComponent},
  {path:"newest", component: NewStoriesComponent},
  {path:"about", component: AboutComponent},
  {path:"story/:id", component: CommentsComponent},
  {path:"", redirectTo: "/news", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
