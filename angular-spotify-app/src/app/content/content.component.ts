import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';
import { Track } from '../track/track.model';
import { NgFor } from '@angular/common';
import { TrackComponent } from '../track/track.component';

@Component({
  selector: 'app-content',
  imports: [NgFor, TrackComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  results:Track[] = [];

  constructor (private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this.results = this.search("");
    console.log(this.results);
  }

  search(query:string) : any {
    return this.spotifyService.search("");
  }
}
