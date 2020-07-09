import { Item } from './../../model/item.model';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hn-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {
  topStoriesIds: number[];
  topStories: Item[];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.topStories = [];
    this.getTopStories();
  }

  getTopStories() {
    this.service.getTopStoriesIds().subscribe(data => {
      this.topStoriesIds = data;
      for (let id in this.topStoriesIds) {
        this.service.getItemById(this.topStoriesIds[id]).subscribe(story => {
          this.topStories.push(story);
          this.topStories[id].time *= 1000;
        });
      }
    });
  }

}
