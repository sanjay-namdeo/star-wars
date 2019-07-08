import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../starwars.sevice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-star',
  templateUrl: './create-star.component.html',
  styleUrls: ['./create-star.component.css']
})
export class CreateStarComponent implements OnInit {
  swService: StarWarService;
  router: Router;
  constructor(service: StarWarService, route: Router) {
    this.swService = service;
    this.router = route;
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this.swService.addCharacter({name: form.value.name, side: form.value.side});
    this.router.navigate(['/characters']);
  }
}
