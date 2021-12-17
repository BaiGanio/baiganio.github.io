import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AsyncSubject, Subject } from 'rxjs';
import { maxLength } from '../../../../@shared/validators/maxlength.validator';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  private editorSubject: Subject<any> = new AsyncSubject();
  myForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl("", Validators.required),
      body: new FormControl("", Validators.required, maxLength(this.editorSubject, 10))
    });
  }

  onSubmit(data: any): void{
    console.log(data);
  }

  handleEditorInit(e) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }

}
