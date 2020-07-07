import { Item } from './../../model/item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hn-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() story: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
