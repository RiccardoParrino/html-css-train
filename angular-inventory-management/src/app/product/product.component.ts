import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  department: string;
  image: string;
  price: string;

  constructor (department:string, image:string, price:string) {
    this.department = department;
    this.image = image;
    this.price = price;
  }

}
