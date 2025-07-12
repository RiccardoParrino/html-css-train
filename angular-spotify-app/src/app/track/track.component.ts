import { Component } from '@angular/core';
import { Track } from './track.model';

@Component({
  selector: 'app-track',
  imports: [],
  templateUrl: './track.component.html',
  styleUrl: './track.component.css'
})
export class TrackComponent {
  track:Track;

  constructor(track:Track) {
    this.track = track;
  }

}
