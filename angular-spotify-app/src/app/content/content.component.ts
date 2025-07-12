import { Component, OnInit } from '@angular/core';
import { TrackComponent } from '../track/track.component';
import { SpotifyService } from '../service/spotify.service';
import { Track } from '../track/track.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [NgFor],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  results:TrackComponent[] = [];

  constructor (private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this.results = this.search("");
  }

  search(query:string) : any {
      let results:Track[] = [];
      
      // mock
      const track1 = new Track(
        "www.google.it",
        "Riptide",
        "Vance Joy",
        "Vance Joy Album",
        "12-07-2025"
      );
  
      const track2 = new Track(
        "www.google.it",
        "Bad Guy",
        "Billie Eilish",
        "Billie Eilish Album",
        "12-07-2025"
      );
  
      const track3 = new Track(
        "www.google.it",
        "Beggin",
        "Maneskin",
        "Maneskin Album",
        "12-07-2025"
      );
  
      results.push(track1);
      results.push(track2);
      results.push(track3);
  
      return results;
    }
}
