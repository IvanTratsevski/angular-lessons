import { Component } from '@angular/core';
import Article from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reddit';
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('JS', 'https://learn.javascript.ru/', 2),
      new Article('React', 'https://reactjs.org/', 1),
    ];
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    this.articles = this.sortedArticles();
    return false;
  }
}
