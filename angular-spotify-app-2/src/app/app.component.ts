import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Track } from './track/track.model';
import { SpotifyService } from './services/spotify.service';
import { TrackComponent } from './track/track.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TrackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-spotify-app-2';

  results:Track[] = [];

  constructor (private spotifyService:SpotifyService){
  }

  search(query:string) {
    this.results = this.spotifyService.search(query);
  }

}
