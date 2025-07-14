import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatPageComponent } from './chat-page/chat-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-chat-app';
}
