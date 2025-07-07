import { Component } from '@angular/core';
import { Product } from './product/product.model';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'inventory-app-root',
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-inventory-management-2';

  products: Product[];

  constructor() {
    this.products = [ 
      new Product(
        "NICEHAT",
        "A Nice Black Hat",
        "/resources/image/products/black-hat.jpg",
        ["Men", "Accessories",  "Hats"],
        29.99
      ),
      new Product (
        "NEATOJACKET",
        "Blue Jacket",
        "assets/images/products/blue-jacket.jpg",
        ["Women",  "Apparel", "Jackets & Vests"],
        238.99
      ),
      new Product (
        "MYSHOES",
        "Black Running Shoes",
        "/assets/images/products/black-soes.jpg",
        ["Men",  "Shoes", "Running Shoes"],
        109.99
      )
   ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
