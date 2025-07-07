import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {

  @Output() datiEmessi = new EventEmitter<string>();

  inviaDati() {
    const messaggio = 'Ciao dal figlio!';
    this.datiEmessi.emit(messaggio);
  }

}
