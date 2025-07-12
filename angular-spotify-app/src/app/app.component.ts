import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ContentComponent } from './content/content.component';
import { Track } from './track/track.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBarComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-spotify-app';

  results:Track[];

  constructor(private searchBarComponent:SearchBarComponent, private contentComponent:ContentComponent) {
    this.results = this.searchBarComponent.results;
  }
  
  updateResults(msg:string) {
    console.log(msg);
    this.contentComponent.results = this.searchBarComponent.results;
  }

}
