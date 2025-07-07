import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-input-value';

  pass_string = 'pass string value';

}
