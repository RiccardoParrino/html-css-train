import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../service/spotify/spotify.service';

@Component({
  selector: 'app-track',
  imports: [],
  templateUrl: './track.component.html',
  styleUrl: './track.component.css'
})
export class TrackComponent implements OnInit{
  id: string = "";

  constructor(private spotifyService:SpotifyService) {}

  ngOnInit(): void {
    this.spotifyService
      .getTrack(this.id)
      .subscribe((res:any) => this.renderTrack(res));
  }

  renderTrack(res:any) {}

}
