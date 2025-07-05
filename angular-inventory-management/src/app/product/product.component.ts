import { Component } from '@angular/core';
import { DepartmentComponent } from './department/department.component';
import { ImageComponent } from './image/image.component';
import { PriceComponent } from './price/price.component';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  department: DepartmentComponent;
  image: ImageComponent;
  price: PriceComponent;

  constructor (department:DepartmentComponent, image:ImageComponent, price:PriceComponent) {
    this.department = department;
    this.image = image;
    this.price = price;
  }

}
