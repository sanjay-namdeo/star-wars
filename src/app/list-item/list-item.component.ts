import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() character;
  @Output() sideChanged = new EventEmitter<{name: '', side: ''}>();

  constructor() { }

  ngOnInit() {
  }

  changeSide(side: string) {
    console.log('from item comp', side);
    this.character.side = side;
    this.sideChanged.emit({name: this.character.name, side: this.character.side});
  }
}
