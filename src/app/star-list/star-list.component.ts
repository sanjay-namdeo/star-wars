import { Component, OnInit, Input } from '@angular/core';
import { StarWarService } from '../starwars.sevice';

@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {
  @Input() characters;
  swService: StarWarService;

  @Input() selectedSide = 'all';

  constructor(service: StarWarService) {
    this.swService = service;
   }

  ngOnInit() {
  }
}
