import { Component, Input } from '@angular/core';
import { Track } from './track.model';

@Component({
  selector: 'app-track',
  imports: [],
  templateUrl: './track.component.html',
  styleUrl: './track.component.css'
})
export class TrackComponent {
  @Input() track!:Track;

  constructor() {
  }

}
