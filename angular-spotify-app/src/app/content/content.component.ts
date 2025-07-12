import { Component, Input, OnInit } from '@angular/core';
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
  @Input() results!:Track[];

  constructor (private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
  }

}
