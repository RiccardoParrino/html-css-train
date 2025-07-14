import { Component } from '@angular/core';
import { CounterService } from '../counter/counter.service';
import { Counter } from '../counter/counter.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  {

  value:Counter = new Counter();

  constructor(public counterService:CounterService) {
    this.counterService
      .streamCounter
      .subscribe( 
        (value) => {
          this.value = value;
        }
      )
  }

  incrementValue() {
    this.counterService.newNumber();
  }

}
