import { NewsService } from './../../services/news.service';
import { Item } from './../../model/item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hn-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  hidden: boolean = false;
  @Input() comment: Item;
  childComments: Item[];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.childComments = [];
    this.getChildComments();
  }

  getChildComments() {
    this.service.getItemsByIdList(this.comment.kids).subscribe(comment => {
      if (comment.type == "comment") {
        comment.time *= 1000;
        this.childComments.push(comment);
        this.childComments.sort((a: Item, b: Item) => {
          const aIndex = this.comment.kids.findIndex(id => id === a.id)
          const bIndex = this.comment.kids.findIndex(id => id === b.id)
          return aIndex - bIndex;
        });
      }
    });
  }

  toggleVisible() {
    this.hidden = !this.hidden
  }

}
