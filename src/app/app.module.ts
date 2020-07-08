import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
