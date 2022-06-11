import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/@services/articles.service';
import { AuthService } from 'src/app/@services/auth.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  loading = true;
  articles:any;
  constructor(
    private articlesService: ArticlesService,
    private errorHandlerService: ErrorHandlerService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe(response => {
      this.articles = response.body;
    },
    error => {
      this.errorHandlerService.handleRequestError(error);
    }, () => { this.loading = false; });
  }

  edit(id:any){
    this.router.navigate(['/articles/edit/' +id]);
  }

  tweakTitle(title: string): string{
    let res = title.toLowerCase().replace(/ /g, '-');
    return res;
  }

  isUserLogged(): boolean {
    return this.authService.isAuthenticated();
  }
}
