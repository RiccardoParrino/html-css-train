import { Component } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../service/spotify/spotify.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  query: string = '';
  results: Object = new Object();

  constructor(
    private spotify: SpotifyService,
    private router: Route,
    private route: ActivatedRoute) {
      this.route
        .queryParams
        .subscribe(params => {this.query = params['query'] || ''; })
  }

  search(): void {
    console.log('this.query', this.query);

    if (!this.query){
      return;
    }

    this.spotify
      .searchTrack(this.query)
      .subscribe( (res:any) => this.renderResults(res) );
  }

  renderResults(res: any): void {
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

}
