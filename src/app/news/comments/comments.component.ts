import { displayAnimation } from './../../animations/displayAnimation';
import { NewsService } from './../../services/news.service';
import { Item } from './../../model/item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hn-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    displayAnimation
  ]
})
export class CommentsComponent implements OnInit {
  story: Item;
  comments: Item[];
  options = {
    itemsPerPage: 10,
    currentPage: 1
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: NewsService) { }

  ngOnInit(): void {
    this.comments = [];
    this.getStory();
  }

  getStory() {
    let id;
    this.activatedRoute.paramMap.subscribe(params => {
      id = params.get("id");
      this.service.getItemById(id).subscribe(story => {
        if (story && story.type == 'story' && story.deleted == null) {
          this.story = story;
          this.story.time *= 1000;
          if (this.story.kids.length != 0) {
            this.getComments();
          }
        } else {
          this.story = new Item();
        }
      });
    });
  }

  getComments() {
    this.service.getItemsByIdList(this.story.kids).subscribe(comment => {
      if (comment && comment.type == "comment" && comment.deleted == null) {
        comment.time *= 1000;
        this.comments.push(comment);
        this.comments.sort((a: Item, b: Item) => {
          const aIndex = this.story.kids.findIndex(id => id === a.id)
          const bIndex = this.story.kids.findIndex(id => id === b.id)
          return aIndex - bIndex;
        });
      }
    });
  }

  pageChanged(newPage) {
    this.options.currentPage = newPage;
  }

}
