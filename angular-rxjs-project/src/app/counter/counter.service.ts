import { Injectable } from '@angular/core';
import { Counter } from './counter.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counterModel:Counter;

  streamCounter:Observable<Number>;

  constructor() {
    this.counterModel = new Counter();
    this.streamCounter = new Observable<Number>();
  }

  newNumber() {
    this.streamCounter.next(1);
  }

}
