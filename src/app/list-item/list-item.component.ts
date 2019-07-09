import { Component, OnInit, Input } from '@angular/core';
import { StarWarService } from '../starwars.sevice';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() character;

  constructor(private swService: StarWarService) { }

  ngOnInit() {
  }

  changeSide(changedSide) {
    this.swService.changeSide({name: this.character.name, side: changedSide});
  }
}
