import { slideInAnimation } from './../../animations/slideInAnimation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
