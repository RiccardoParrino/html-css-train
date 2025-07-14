import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Counter } from './counter.model';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  value:Counter;

  streamCounter:Subject<Counter> = new Subject<Counter>();

  constructor() {
    this.value = new Counter();
  }

  newNumber() {
    this.value.value = this.value.value + 1;
    this.streamCounter.next(this.value);
  }

}
