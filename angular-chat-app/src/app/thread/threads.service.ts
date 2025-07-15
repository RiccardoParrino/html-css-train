import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MessagesService } from '../message/messages.service';
import { Thread } from './thread.model';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  currentThread: Subject<Thread>;
  threads: Thread[];

  constructor(public messageService: MessagesService) {
    const echo: User = new User('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
    let tEcho: Thread = new Thread('tEcho', echo.name, echo.avatarSrc);
    this.currentThread = new BehaviorSubject<Thread>(tEcho);
    this.threads = [];
  }

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread);
  }

  setAllThreads(threads:Thread[]){
    this.threads = threads;
  }

}
