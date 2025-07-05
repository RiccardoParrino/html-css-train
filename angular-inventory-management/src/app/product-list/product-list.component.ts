import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    
  }
}
