import { displayAnimation } from './../../animations/displayAnimation';
import { User } from './../../model/user.model';
import { NewsService } from './../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hn-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    displayAnimation
  ]
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: NewsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get("id")) {
        let userId = params.get("id");
        this.service.getUser(userId).subscribe(user => {
          if (user && user.id) {
            user.created *= 1000;
            this.user = user;
          } else {
            this.user = new User();
          }
        });
      }
    });
  }

}
