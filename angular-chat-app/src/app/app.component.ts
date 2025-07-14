import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { MessagesService } from './message/messages.service';
import { ThreadsService } from './thread/threads.service';
import { UsersService } from './user/users.service';
import { ChatExampleData } from './data/chat-example-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService) {
    ChatExampleData.init(messagesService, threadsService, usersService);
  }
}
