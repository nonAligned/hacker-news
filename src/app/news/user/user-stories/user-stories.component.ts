import { displayAnimation } from './../../../animations/displayAnimation';
import { NewsService } from './../../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from './../../../model/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.scss'],
  animations: [
    displayAnimation
  ]
})
export class UserStoriesComponent implements OnInit {
  userItemsIds: number[];
  userStories: Item[];
  options = {
    itemsPerPage: 25,
    currentPage: 1
  }

  constructor(private activatedRoute: ActivatedRoute, private service: NewsService) { }

  ngOnInit(): void {
    this.userStories = [];
    this.userItemsIds = [];
    this.activatedRoute.parent.paramMap.subscribe(params => {
      let userId = params.get("id");
      this.service.getUser(userId).subscribe(user => {
        if (user && user.submitted.length > 0) {
          for (let i = 0; i < 50; i++) {
            this.userItemsIds.push(user.submitted[i]);
          }
          this.getStories();
        }
      });
    });
  }

  getStories() {
    this.service.getItemsByIdList(this.userItemsIds).subscribe(item => {
      if(item && item.type == "story" && item.deleted == null) {
        item.time *= 1000;
        this.userStories.push(item);
        this.userStories.sort((a: Item, b: Item) => {
          const aIndex = this.userItemsIds.findIndex(id => id === a.id)
          const bIndex = this.userItemsIds.findIndex(id => id === b.id)
          return aIndex - bIndex;
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
