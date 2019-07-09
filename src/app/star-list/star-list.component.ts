import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';
import { StarWarService } from '../starwars.sevice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {
  @Output() changedSide = new EventEmitter<{ name: '', side: '' }>();
  side: string;
  characters;

  constructor(private swservice: StarWarService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(
      (params) => {
        this.side = params.side;
        this.characters = this.swservice.getCharacters(params.side);
      }
    );
    this.swservice.changeSideObserver.subscribe(() => {
      this.characters = this.swservice.getCharacters(this.side);
    });
  }
}
