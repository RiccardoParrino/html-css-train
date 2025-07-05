import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: ProductComponent[];

  constructor() {
    var p1:ProductComponent = new ProductComponent("p1Department", "p1Image", "p1Price");
    var p2:ProductComponent = new ProductComponent("p2Department", "p2Image", "p2Price");
    var p3:ProductComponent = new ProductComponent("p3Department", "p3Image", "p3Price");

    console.log(p1.department);

    this.products = [];
    this.products.push(p1);
    this.products.push(p2);
    this.products.push(p3);
  }
}
