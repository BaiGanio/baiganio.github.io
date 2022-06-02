import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/@services/articles.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  loading = true;
  articles: any;
  userId: string;
  constructor(private articlesService: ArticlesService, private errorHandlerService: ErrorHandlerService) { }

  ngOnInit(): void {
    this.articlesService.getBloggerArticles().subscribe(response => {
      this.articles = response.body;
    },
    error => {
      this.errorHandlerService.handleRequestError(error);
    }, () => this.loading = false);
  }
  tweakTitle(title: string): string{
    let res = title.toLowerCase().replace(/ /g, '-');
    return res;
  }
  getRouterLink(){
    return '/bloggers/' + this.userId + '/articles';
  }
}
