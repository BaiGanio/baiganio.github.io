import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/@services/articles.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {
  loading = true;
  article:any;
  name:string;
  isMarkdownUrl:boolean;
  constructor(
    private articlesService: ArticlesService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute
  ) {
    this.name = this.route.snapshot.params.name;
  }

  ngOnInit(): void {
    this.articlesService.getByTitle(this.name).subscribe(response => {
      this.article = response.body;
      this.isMarkdownUrl = !!this.article.markdownUrl;
    },
    error => {
      this.errorHandlerService.handleRequestError(error);
    }, () => { this.loading = false; });
  }

}
