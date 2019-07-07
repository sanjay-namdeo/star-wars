import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../starwars.sevice';

@Component({
  selector: 'app-app-tab',
  templateUrl: './app-tab.component.html',
  styleUrls: ['./app-tab.component.css']
})
export class AppTabComponent implements OnInit {
  selectedSide = 'all';
  swService: StarWarService;

  constructor(service: StarWarService) {
    this.swService = service;
   }

  ngOnInit() {
  }

  changeTab(side: string) {
    this.selectedSide = side;
  }

  getCharacters() {
    return this.swService.getCharacters(this.selectedSide);
  }

  sideChanged(char) {
    this.swService.changeSide(char);
  }
}
