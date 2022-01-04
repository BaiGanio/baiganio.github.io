import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/@services/articles.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {
  article: any;
  loading = true;
  constructor(    private route: ActivatedRoute, private errorHandlerService: ErrorHandlerService,
    private router: Router, private articlesService: ArticlesService) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.title) {
      this.articlesService.getArticleByTitle(this.route.snapshot.params.title).subscribe(response => {
        this.article = response.body;
        console.log(this.article);
      },
      error => {
        this.errorHandlerService.handleRequestError(error);
      }, () => { this.loading = false; });
    }
  }

}
