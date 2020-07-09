import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { AboutComponent } from './core/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopStoriesComponent } from './news/top-stories/top-stories.component';
import { NewStoriesComponent } from './news/new-stories/new-stories.component';
import { CommentsComponent } from './news/comments/comments.component';
import { StoryComponent } from './news/story/story.component';
import { CommentComponent } from './news/comment/comment.component';
import { UserComponent } from './news/user/user.component';
import { UserStoriesComponent } from './news/user/user-stories/user-stories.component';
import { UserCommentsComponent } from './news/user/user-comments/user-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    AboutComponent,
    NotFoundComponent,
    TopStoriesComponent,
    NewStoriesComponent,
    CommentsComponent,
    StoryComponent,
    CommentComponent,
    UserComponent,
    UserStoriesComponent,
    UserCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
