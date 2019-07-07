import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarWarService } from '../starwars.sevice';

@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {
  @Input() characters;
  swService: StarWarService;
  @Output() changedSide = new EventEmitter<{name: '', side: ''}>();


  @Input() selectedSide = 'all';

  constructor(service: StarWarService) {
    this.swService = service;
   }

  ngOnInit() {
  }

  onChangeSide(char) {
    this.changedSide.emit(char);
  }
}
