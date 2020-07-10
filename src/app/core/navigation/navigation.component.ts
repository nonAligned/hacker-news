import { focusAnimation } from './../../animations/focusAnimation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hn-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    focusAnimation
  ]
})
export class NavigationComponent implements OnInit {
  url: string;
  focused: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(data => {
      this.url = this.router.url;
    });
  }

  focusLink(link: string) {
    this.focused = link;
  }

}
