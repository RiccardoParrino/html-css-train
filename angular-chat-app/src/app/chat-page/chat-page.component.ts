import { Component, OnInit } from '@angular/core';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { ChatThreadsComponent } from '../chat-threads/chat-threads.component';
import { ChatNavBarComponent } from '../chat-nav-bar/chat-nav-bar.component';

@Component({
  selector: 'app-chat-page',
  imports: [ChatWindowComponent, ChatThreadsComponent, ChatNavBarComponent],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css'
})
export class ChatPageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }

}
