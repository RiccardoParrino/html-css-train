import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceCalculatorService {

  constructor() { }

  getPrice () : Number{
    return 3;
  }
}
