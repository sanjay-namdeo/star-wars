import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../starwars.sevice';

@Component({
  selector: 'app-create-star',
  templateUrl: './create-star.component.html',
  styleUrls: ['./create-star.component.css']
})
export class CreateStarComponent implements OnInit {
  swService: StarWarService;
  constructor(service: StarWarService) {
    this.swService = service;
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this.swService.addCharacter({name: form.value.name, side: form.value.side});
  }
}
