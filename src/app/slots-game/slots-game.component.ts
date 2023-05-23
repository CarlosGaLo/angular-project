import { Component } from '@angular/core';

@Component({
  selector: 'app-slots-game',
  templateUrl: './slots-game.component.html',
  styleUrls: ['./slots-game.component.scss']
})
export class SlotsGameComponent {
  card: string;
  order: number;

  constructor() {
    this.card = 'Sota de tréboles';
    this.order = 0;
  }
}
