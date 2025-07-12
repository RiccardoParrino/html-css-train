import { Component } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  constructor(spotifyService:SpotifyService) {}

  search(query:string) {
    console.log(`Searching for ${query}`);
  }

}
