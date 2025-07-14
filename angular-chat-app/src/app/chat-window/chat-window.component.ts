import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'chat-window',
  imports: [NgFor],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {

  actualThread:string;
  messages: string[];
  
  constructor() {
    this.actualThread = "pippo";
    this.messages = ["ciao come stai", "tutto bene", "anche io"];
  }

}
