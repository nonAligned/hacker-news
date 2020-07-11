import { displayAnimation } from './../../animations/displayAnimation';
import { NewsService } from './../../services/news.service';
import { Item } from './../../model/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hn-new-stories',
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.scss'],
  animations: [
    displayAnimation
  ]
})
export class NewStoriesComponent implements OnInit {
  newStoriesIds: number[];
  newStories: Item[];
  options = {
    itemsPerPage: 25,
    currentPage: 1
  }

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.newStories = [];
    this.getNewStories();
  }

  getNewStories() {
    this.service.getNewStoriesIds().subscribe(data => {
      this.newStoriesIds = data;
      if (this.newStoriesIds.length > 0) {

        this.service.getItemsByIdList(this.newStoriesIds).subscribe(story => {
          if (story && story.type == "story" && story.deleted == null) {

            story.time *= 1000;
            this.newStories.push(story);
            this.newStories.sort((a: Item, b: Item) => {
              const aIndex = this.newStoriesIds.findIndex(id => id === a.id)
              const bIndex = this.newStoriesIds.findIndex(id => id === b.id)
              return aIndex - bIndex;
            });

          }
        });

      }
    });
  }

}
