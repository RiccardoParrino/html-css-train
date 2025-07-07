import { Component } from '@angular/core';
import { ChildrenComponent } from './children/children.component';

@Component({
  selector: 'app-root',
  imports: [ChildrenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-output-value';
  
  messaggioDalFiglio = '';

  riceviDati(dato: string) {
    this.messaggioDalFiglio = dato;
  }

}
