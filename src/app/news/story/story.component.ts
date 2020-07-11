import { focusAnimation } from './../../animations/focusAnimation';
import { Item } from './../../model/item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hn-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  animations: [
    focusAnimation
  ]
})
export class StoryComponent implements OnInit {
  @Input() story: Item;
  screenWidth: number
  focused: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  focusElement(value: boolean) {
    this.focused = value;
    this.screenWidth = window.innerWidth;
  }

}
