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
      "https://upload.wikimedia.org/wikipedia/en/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png",
      "Riptide",
      "Vance Joy",
      "Vance Joy Album",
      "12-07-2025"
    );

    const track2 = new Track(
      "https://upload.wikimedia.org/wikipedia/en/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png",
      "Bad Guy",
      "Billie Eilish",
      "Billie Eilish Album",
      "12-07-2025"
    );

    const track3 = new Track(
      "https://upload.wikimedia.org/wikipedia/en/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png",
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
