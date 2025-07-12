import { Injectable } from '@angular/core';
import { Track } from '../track/track.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() {
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
