import { NewsService } from './../../services/news.service';
import { Item } from './../../model/item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hn-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  story: Item;
  comments: Item[];

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
        this.story = story;
        if (this.story.kids.length != 0) {
          this.getComments();
        }
      });
    });
  }

  getComments() {
    for(let i in this.story.kids) {
      this.service.getItemById(this.story.kids[i]).subscribe(comment => {
        this.comments.push(comment);
      });
    }
  }

}
