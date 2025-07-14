import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  value:number;

  constructor() {
    this.value = 0;
  }

  incrementValue() {
    this.value = this.value+1;
  }

}
