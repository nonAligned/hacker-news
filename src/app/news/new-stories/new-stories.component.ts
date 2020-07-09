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
      this.service.getItemsByIdList(this.newStoriesIds).subscribe(story => {
        if (story.type == "story") {
          story.time *= 1000;
          this.newStories.push(story);
          this.newStories.sort((a: Item, b: Item) => {
            const aIndex = this.newStoriesIds.findIndex(id => id === a.id)
            const bIndex = this.newStoriesIds.findIndex(id => id === b.id)
            return aIndex - bIndex;
          });
        }
      });
      // for (let id in this.newStoriesIds) {
      //   this.service.getItemById(this.newStoriesIds[id]).subscribe(story => {
      //     if (story.type == 'story') {
      //       story.time *= 1000;
      //       this.newStories.push(story);
      //     }
      //   });
      // }
    });
  }

}
