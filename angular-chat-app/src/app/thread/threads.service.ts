import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';
import { Thread } from './thread.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread());

  constructor(public messageService: MessagesService) { }

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread);
  }
}
