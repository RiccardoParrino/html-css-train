import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  static BASE_URL = "https://api.spotify.com/v1";

  constructor(public http: HttpClient) { }

  query (URL: string, params?: Array<string>): Observable<any> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    
    if (params) {
      queryURL = `${queryURL}?${params.join("&")}`;
    }
    const apiKey = environment.spotifyApiKey;
    const headers = new HttpHeaders ([
      Authorization: `Bearer ${apiKey}`
    ]);

    const options = {
      headers: headers
    }

    return this.http.request("GET", queryURL, options);
  }

  searchTrack(query: string, type: string): Observable<any> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }

  getTrack(id: string): Observable<any> {
    return this.query(`/tracks/${id}`);
  }
}
