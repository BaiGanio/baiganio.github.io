import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/@services/articles.service';
import { AuthService } from 'src/app/@services/auth.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { CreateArticleComponent } from './create-article/create-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';

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
    private router: Router,
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.articlesService.getAll().subscribe(response => {
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

  create(): void {
    const dialogRef = this.dialog.open(CreateArticleComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.articlesService.create(result).subscribe(response => {
          this.articles.push(response);
          this.snackbar.open(`Successfuly created article '${response.title}'`, 'X', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: 'successSnackbar'
          });
        }, error => {
            this.errorHandlerService.handleRequestError(error);
            this.loading = false;
        }, () => { this.loading = false; });

      }




    });
  }

  delete(article:any): void {
    const dialogRef = this.dialog.open(DeleteArticleComponent, {
      width: '650px',
      data:{name: article.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.articlesService.delete(article.id).subscribe(response => {
          this.articles = this.articles.filter(a => a !== article);
          this.snackbar.open(`${response}`, 'X', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: 'successSnackbar'
          });
        }, error => {
            this.errorHandlerService.handleRequestError(error);
            this.loading = false;
        }, () => { this.loading = false; });

      }




    });
  }

}
