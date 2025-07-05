import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  value: number;

  constructor() {
    this.value = 1;
  }

  increase() {
    this.value = this.value + 1;
    console.log(this.value);
    return false;
  }

  decrease() {
    this.value = this.value - 1;
    console.log(this.value);
    return false;
  }

}
