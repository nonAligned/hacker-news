import { NewsService } from './../../services/news.service';
import { Item } from './../../model/item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hn-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Item;
  childComments: Item[];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.childComments = [];
    this.getChildComments();
  }

  getChildComments() {
    for (let i in this.comment.kids) {
      this.service.getItemById(this.comment.kids[i]).subscribe(comment => {
        this.childComments.push(comment);
      });
    }
  }

}
