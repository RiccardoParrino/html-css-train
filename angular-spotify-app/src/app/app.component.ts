import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBarComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-spotify-app';
}
