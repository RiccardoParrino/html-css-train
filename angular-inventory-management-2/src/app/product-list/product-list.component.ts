import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products!: Product[];
  @Output() onproductSelected!: EventEmitter<Product>;
}
