import { Component, OnInit } from '@angular/core';
import { TrackComponent } from '../track/track.component';
import { SpotifyService } from '../service/spotify.service';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  results:TrackComponent[] = [];

  constructor (private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this.results = [];
  }
}
