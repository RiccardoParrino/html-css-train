import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Track } from './track/track.model';
import { SpotifyService } from './services/spotify.service';
import { TrackComponent } from './track/track.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TrackComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-spotify-app-2';

  results:Track[] = [];

  constructor (private spotifyService:SpotifyService){
  }

  ngOnInit(): void {
    this.results = this.spotifyService.search("");
    console.log(this.results);
  }

  search(query:string) {
    this.results = this.spotifyService.search(query);
  }

}
