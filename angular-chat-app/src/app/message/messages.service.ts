import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  newMessages: Subject<Message> = new Subject<Message>();

  messages: Message[];

  constructor() {
    this.messages = [];
  }

  addMessage(message: Message):void {
    this.newMessages.next(message);
    this.messages.push(message);
  }
}
