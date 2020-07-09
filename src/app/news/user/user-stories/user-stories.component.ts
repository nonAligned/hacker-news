import { NewsService } from './../../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from './../../../model/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.scss']
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
    this.activatedRoute.parent.paramMap.subscribe(params => {
      let userId = params.get("id");
      this.service.getUser(userId).subscribe(user => {
        this.userItemsIds = user.submitted;
        if (this.userItemsIds.length > 0) {
          for (let i=0 ; i<50 ; i++) {
            if(i <= this.userItemsIds.length - 1) {
              this.service.getItemById(this.userItemsIds[i]).subscribe(item => {
                if (item.type == "story" && item.deleted == null) {
                  item.time *= 1000;
                  this.userStories.push(item);
                }
              })
            }
          }
        }
      });
    });
  }

}
