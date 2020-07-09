import { NewsService } from './../../services/news.service';
import { Item } from './../../model/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hn-new-stories',
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.scss']
})
export class NewStoriesComponent implements OnInit {
  newStoriesIds: number[];
  newStories: Item[];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.newStories = [];
    this.getNewStories();
  }

  getNewStories() {
    this.service.getNewStoriesIds().subscribe(data => {
      this.newStoriesIds = data;
      for (let id in this.newStoriesIds) {
        this.service.getItemById(this.newStoriesIds[id]).subscribe(story => {
          if (story.type == 'story') {
            this.newStories.push(story);
            this.newStories[id].time *= 1000;
          }
        });
      }
    });
  }

}
