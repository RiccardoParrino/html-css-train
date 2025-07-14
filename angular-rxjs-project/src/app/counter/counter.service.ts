import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  value:number;

  streamCounter:Subject<number> = new Subject<number>();

  constructor() {
    this.value = 0;
  }

  newNumber() {
    this.value = this.value + 1;
    this.streamCounter.next(this.value);
  }

}
