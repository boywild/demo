import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/article.model';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  articles: Article[];
  title: string;
  constructor() {
    this.articles = [
      new Article('angular2', 'https://www.baidu.com', 2),
      new Article('fullstack', 'https://www.hao123.com', 3),
      new Article('Angular Homepage', 'https://www.taobao.com', 4),
    ]
    this.title = ' Angular 2 Simple Reddit';
  }

  ngOnInit() {
    this.sortArticle();
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(title.value, link.value);
    if (title.value !== '' && link.value !== '') {
      this.articles.push(new Article(title.value, link.value, 0))
    }
    return false;
  }
  sortArticle(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
