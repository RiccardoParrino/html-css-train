import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product.model';

@Component({
  selector: 'inventory-app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-inventory-management-2';

  product: Product;

  constructor() {
    this.product = new Product(
      "NICEHAT",
      "A Nice Black Hat",
      "/resources/image/products/black-hat.jpg",
      ["Men", "Accessories",  "Hats"],
      29.99
    );
  }
}
