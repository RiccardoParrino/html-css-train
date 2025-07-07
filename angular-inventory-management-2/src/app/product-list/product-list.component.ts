import { Component, Input } from '@angular/core';
import { Product } from '../product/product.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent{
  @Input() productList: Product[] = [];
}
