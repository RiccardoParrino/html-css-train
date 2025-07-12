import { Component } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';
import { Track } from '../track/track.model';
import { TrackComponent } from '../track/track.component';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  results:TrackComponent[] = [];

  constructor(private spotifyService:SpotifyService) {}

  search(query:string) : Track[] {
    console.log(`Searching for ${query}`);
    
    let results = this.spotifyService.search(query);

    return results;
  }

}
