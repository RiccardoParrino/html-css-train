import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  @Input() products: ProductComponent[];
  p1: ProductComponent;
  p2: ProductComponent;
  p3: ProductComponent;
  
  constructor() {
    this.products = [];

    this.p1 = new ProductComponent();
    this.p2 = new ProductComponent();
    this.p3 = new ProductComponent();

    this.p1.department = "p1Department";
    this.p1.image = "p1Image";
    this.p1.price = "p1Price";
    this.p1.product_name = "p1ProductName";

    this.p2.department = "p2Department";
    this.p2.image = "p2Image";
    this.p2.price = "p2Price";
    this.p2.product_name = "p2ProductName";

    this.p3.department = "p3Department";
    this.p3.image = "p3Image";
    this.p3.price = "p3Price";
    this.p3.product_name = "p3ProductName";

    this.products.push(this.p1);
    this.products.push(this.p2);
    this.products.push(this.p3);
  }

  ngOnInit(): void {
    
  }
}
