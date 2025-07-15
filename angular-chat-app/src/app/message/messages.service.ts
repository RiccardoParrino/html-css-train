import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  newMessages: Subject<Message> = new Subject<Message>();

  messages: Observable<Message[]> = new Observable<Message[]>();

  updates: Subject<any> = new Subject<any>();

  constructor() {
  }

  addMessage(message: Message):void {
    this.newMessages.next(message);
  }
}
