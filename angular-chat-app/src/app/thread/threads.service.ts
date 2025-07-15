import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';
import { Thread } from './thread.model';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  currentThread: Subject<Thread>;

  constructor(public messageService: MessagesService) {
    const echo: User = new User('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
    let tEcho: Thread = new Thread('tEcho', echo.name, echo.avatarSrc);
    this.currentThread = new BehaviorSubject<Thread> (tEcho);
  }

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread);
  }
}
