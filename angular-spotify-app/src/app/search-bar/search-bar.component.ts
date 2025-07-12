import { Component } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';
import { Track } from '../track/track.model';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  constructor(private spotifyService:SpotifyService) {}

  search(query:string) : Track[] {
    console.log(`Searching for ${query}`);
    return this.spotifyService.search(query);
  }

}
