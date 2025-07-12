import { Component } from '@angular/core';

@Component({
  selector: 'app-track',
  imports: [],
  templateUrl: './track.component.html',
  styleUrl: './track.component.css'
})
export class TrackComponent {
  imgUrl:string;
  name:string;
  album:string;
  date:string;

  constructor() {
    this.imgUrl = "";
    this.album = "";
    this.date = "";
    this.name = "";
  }

  getImgUrl() : string {
    return this.imgUrl;
  }

  setImgUrl(imgUrl : string) : void {
    this.imgUrl = imgUrl;
  }

  getAlbum() : string {
    return this.album;
  }

  setAlbum(album : string) : void {
    this.album = album;
  }

  getDate() : string {
    return this.date;
  }

  setDate(date : string) : void {
    this.date = date;
  }

  getName() : string {
    return this.name;
  }

  setName( name:string ) : void {
    this.name = name;
  }
}
