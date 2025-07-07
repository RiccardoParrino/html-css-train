import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent implements OnInit {

  @Output() datiEmessi = new EventEmitter<string>();

  ngOnInit(): void {
    const messaggio = 'Ciao dal figlio!';
    this.datiEmessi.emit(messaggio);
  }

}
