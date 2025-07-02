import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp() {
    this.votes += 1;
    return false;
  }

  voteDown() {
    this.votes -= 1;
    return false;
  }

  ngOnInit(): void {
    
  }

}
