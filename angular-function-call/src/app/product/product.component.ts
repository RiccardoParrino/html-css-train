import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Output() dataEmitter: EventEmitter<Number>;
  counter:number = 0;

  constructor() {
    this.dataEmitter = new EventEmitter<Number>();
  }

  increase() {
    this.counter = this.counter + 1;
    this.inviaMessaggio();
    return false;
  }

  decrease() {
    this.counter = this.counter - 1;
    this.inviaMessaggio();
    return false;
  }

  inviaMessaggio() {
    this.dataEmitter.emit(this.counter);
  }

}
