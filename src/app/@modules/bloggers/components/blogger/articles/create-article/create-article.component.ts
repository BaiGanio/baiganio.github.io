import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AsyncSubject, Subject } from 'rxjs';
import { BloggersService } from 'src/app/@services/bloggers.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { maxLength } from 'src/app/@shared/validators/maxlength.validator';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  private editorSubject: Subject<any> = new AsyncSubject();
  myForm: FormGroup = new FormGroup({});
  loading = false;

  constructor(private bloggerService: BloggersService,
    private errorHandlerService: ErrorHandlerService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl("", Validators.required),
      body: new FormControl("", Validators.required, maxLength(this.editorSubject, 10))
    });
  }

  onSubmit(data: any): void{
    console.log(data);

    this.bloggerService.createPost({Title: this.myForm.value.title, RawHtml: this.myForm.value.body }).subscribe(response => {
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

  handleEditorInit(e) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }

}
