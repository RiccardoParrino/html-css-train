import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';
import { Track } from '../track/track.model';
import { TrackComponent } from '../track/track.component';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit{
  @Output() searchEvent = new EventEmitter<string>();
  results:Track[] = [];

  constructor(private spotifyService:SpotifyService) {}

  ngOnInit(): void {
    this.results = this.search("");
  }

  search(query:string) : Track[] {
    console.log(`Searching for ${query}`);
    let results = this.spotifyService.search(query);
    this.notificaAlPadre();
    return results;
  }

  notificaAlPadre() {
    this.searchEvent.emit('Searc occured!');
  }

}
