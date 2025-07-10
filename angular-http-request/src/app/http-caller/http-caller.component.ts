import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-http-caller',
  imports: [NgIf],
  templateUrl: './http-caller.component.html',
  styleUrl: './http-caller.component.css'
})
export class HttpCallerComponent implements OnInit{
  data: Object;
  loading: boolean;

  constructor (private http: HttpClient) {
    this.data = new Object();
    this.loading = false;
  }

  ngOnInit(): void {}

  makeRequest(): void {
    this.loading = true;
    this.http
      .get('https://dummyjson.com/test')
      .subscribe( data => {
        this.data = data;
        this.loading = false;
      } )
  }
}
