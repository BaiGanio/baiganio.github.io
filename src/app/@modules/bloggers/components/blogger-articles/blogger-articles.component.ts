import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/@services/articles.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-blogger-articles',
  templateUrl: './blogger-articles.component.html',
  styleUrls: ['./blogger-articles.component.scss']
})
export class BloggerArticlesComponent implements OnInit {
  articles: any;
  constructor(private articlesService: ArticlesService, private errorHandlerService: ErrorHandlerService) { }

  ngOnInit(): void {
    alert("in blogger articles");
    this.articlesService.getBloggerArticles().subscribe(response => {
      this.articles = response.body;
    },
    error => {
      this.errorHandlerService.handleRequestError(error);
    });
  }

}
