import { Component, OnInit,Input } from '@angular/core';
import { Article } from '../../model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  constructor() {}

  ngOnInit() {
  }
  voteUp(): void {
    this.article.voteUp();
  }
  voteDown(): void {
    this.article.voteDown();
  }
}
