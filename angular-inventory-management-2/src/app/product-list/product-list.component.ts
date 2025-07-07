import { Component, Input } from '@angular/core';
import { Product } from '../product/product.model';
import { NgFor } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent{
  @Input() productList: Product[] = [];
}
