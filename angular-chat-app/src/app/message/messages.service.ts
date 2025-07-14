import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from './message.model';

const initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  newMessages: Subject<Message> = new Subject<Message>();

  messages: Observable<Message[]>;

  updates: Subject<any> = new Subject<any>();

  constructor() {
    this.messages = this.updates
      .scan( (messages: Message[],
              operation: IMessageOperation) => {
                return operation(messages);
              }
      ) )
  }

  addMessage(message: Message):void {
    this.newMessages.next(message);
  }
}
