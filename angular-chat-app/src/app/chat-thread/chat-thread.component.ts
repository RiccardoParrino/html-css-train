import { Component, Input } from '@angular/core';
import { Thread } from '../thread/thread.model';
import { ThreadsService } from '../thread/threads.service';

@Component({
  selector: 'chat-thread',
  imports: [],
  templateUrl: './chat-thread.component.html',
  styleUrl: './chat-thread.component.css'
})
export class ChatThreadComponent {

  @Input() thread!: Thread;
  selected = false;

  constructor (public threadService:ThreadsService) {
  }

  ngOnInit(): void {
    this.threadService.currentThread
      .subscribe( (currentThread: Thread) => {
        this.selected = currentThread && 
          this.thread && 
          (currentThread.id === this.thread.id);
      });
  }

  setCurrentThread(event:any) {
    this.threadService.setCurrentThread(this.thread);
  }

}
