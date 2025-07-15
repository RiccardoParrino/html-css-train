import { Component } from '@angular/core';
import { Thread } from '../thread/thread.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'chat-threads',
  imports: [NgFor],
  templateUrl: './chat-threads.component.html',
  styleUrl: './chat-threads.component.css'
})
export class ChatThreadsComponent {
  threads:Thread[];

  constructor () {
    this.threads = [];
  }
}
