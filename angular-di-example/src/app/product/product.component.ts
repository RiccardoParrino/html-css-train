import { Component, OnInit } from '@angular/core';
import { PriceCalculatorService } from '../service/price/price-calculator.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  constructor(private price:PriceCalculatorService) {}

  ngOnInit(): void {
    console.log(this.price.getPrice());
  }
}
