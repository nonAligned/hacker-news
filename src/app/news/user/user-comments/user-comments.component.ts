import { displayAnimation } from './../../../animations/displayAnimation';
import { NewsService } from './../../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from './../../../model/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss'],
  animations: [
    displayAnimation
  ]
})
export class UserCommentsComponent implements OnInit {
  userItemsIds: number[];
  userComments: Item[];
  options = {
    itemsPerPage: 10,
    currentPage: 1
  }

  constructor(private activatedRoute: ActivatedRoute, private service: NewsService) { }

  ngOnInit(): void {
    this.userComments = [];
    this.activatedRoute.parent.paramMap.subscribe(params => {
      let userId = params.get("id");
      this.service.getUser(userId).subscribe(user => {
        this.userItemsIds = user.submitted;
        if (this.userItemsIds.length > 0) {
          for (let i=0 ; i<50 ; i++) {
            if(i <= this.userItemsIds.length - 1) {
              this.service.getItemById(this.userItemsIds[i]).subscribe(item => {
                if (item.type == "comment" && item.deleted == null) {
                  item.time *= 1000;
                  this.userComments.push(item);
                }
              })
            }
          }
        }
      });
    });
  }

}
