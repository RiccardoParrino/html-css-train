import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ThreadsService } from '../thread/threads.service';
import { Thread } from '../thread/thread.model';
import { MessagesService } from '../message/messages.service';

@Component({
  selector: 'chat-window',
  imports: [NgFor],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {

  actualThread!:Thread;
  messages:string[];
  
  constructor(private threadsService:ThreadsService) {
    this.threadsService.currentThread.subscribe(
      (thread) => { this.actualThread = thread; }
    );
    this.messages = [];
  }

  sendMessage(msgText:HTMLInputElement) {
    console.log(msgText);
  }

}
