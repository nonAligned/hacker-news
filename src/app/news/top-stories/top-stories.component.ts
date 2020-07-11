import { displayAnimation } from './../../animations/displayAnimation';
import { Item } from './../../model/item.model';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hn-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
  animations: [
    displayAnimation
  ]
})
export class TopStoriesComponent implements OnInit {
  topStoriesIds: number[];
  topStories: Item[];
  options = {
    itemsPerPage: 25,
    currentPage: 1
  }

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.topStories = [];
    this.getTopStories();
  }

  getTopStories() {
    this.service.getTopStoriesIds().subscribe(data => {
      this.topStoriesIds = data;
      if (this.topStoriesIds.length > 0) {

        this.service.getItemsByIdList(this.topStoriesIds).subscribe(story => {
          if (story && story.type == "story" && story.deleted == null) {

            story.time *= 1000;
            this.topStories.push(story);
            this.topStories.sort((a: Item, b: Item) => {
              const aIndex = this.topStoriesIds.findIndex(id => id === a.id)
              const bIndex = this.topStoriesIds.findIndex(id => id === b.id)
              return aIndex - bIndex;
            });

          }
        });

      }
    });
  }

  pageChanged(newPage) {
    this.options.currentPage = newPage;
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 100);
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 16);
  }

}
