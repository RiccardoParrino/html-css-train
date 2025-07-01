import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, UserItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-first-app';
}
