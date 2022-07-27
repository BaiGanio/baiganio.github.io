import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, } from '@angular/router';
import { ArticlesService } from 'src/app/@services/articles.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
 formData: UntypedFormGroup;
 loading = true;
 id:any;
 article:any;


  constructor(
    private route: ActivatedRoute,
    private errorHandlerService: ErrorHandlerService,
    private articlesService: ArticlesService,
    private snackbar: MatSnackBar
  ) {
    this.id = this.route.snapshot.params.id;
    this.formData = new UntypedFormGroup({
      title: new UntypedFormControl(''),
      imgUrl: new UntypedFormControl(''),
      rawHtml: new UntypedFormControl(''),
      markdownUrl: new UntypedFormControl('')
    });
   }

  ngOnInit(): void {
    this.getArticle();
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.formData.controls[controlName].hasError(errorName);
  }

  onDismiss(){
    this.formData.reset();
    this.prepForm()
  }

  onSubmit(data){
    this.loading = true;
    let article = {
      Id: this.id,
      Title: data.title,
      ImgUrl: data.imgUrl,
      RawHtml: data.rawHtml,
      Markdown: this.article.markdown,
      MarkdownUrl: data.markdownUrl,
      CreatedOn: this.article.createdOn,
      BloggerId: this.article.bloggerId,
      UserId: this.article.UserId,
      BloggerNickname: this.article.bloggerNickname
    };
    this.articlesService.update(article)
    .subscribe(
        (response) => {
          this.snackbar.open(`Successfuly updated article '${article.Title}'`, 'X', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: 'successSnackbar'
          });
          this.getArticle();
        },
        error => {
            this.errorHandlerService.handleRequestError(error);
        },
        () => {
            this.formData.reset();
            this.prepForm();
            this.loading = false;
        }
    );

  }

  private getArticle(){
    this.articlesService.getById(this.id).subscribe(response => {
      this.article = response.body;
    },
    error => {
      this.errorHandlerService.handleRequestError(error);
    }, () => { this.loading = false; this.prepForm(); });
  }

  private prepForm(){
    this.formData = new UntypedFormGroup({
      title: new UntypedFormControl(this.article.title),
      imgUrl: new UntypedFormControl(this.article.imgUrl),
      rawHtml: new UntypedFormControl(this.article.rawHtml),
      markdownUrl: new UntypedFormControl(this.article.markdownUrl)
    });
  }

}
