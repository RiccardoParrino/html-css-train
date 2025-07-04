import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { Article } from './article/article.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];

  constructor () {
    this.articles = [];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`)
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  deleteAllArticles() : boolean {
    this.articles = [];
    return false;
  }

  sortedArticles() : Article[] {
    console.log(`Sorting articles by votes!`);
    return this.articles.sort((a1, a2) => a1.votes - a2.votes);
  }
}
