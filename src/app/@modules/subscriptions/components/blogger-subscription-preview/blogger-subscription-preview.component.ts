import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Blogger } from 'src/app/@modules/bloggers/models/blogger.model';
import { BloggersService } from 'src/app/@services/bloggers.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-blogger-subscription-preview',
  templateUrl: './blogger-subscription-preview.component.html',
  styleUrls: ['./blogger-subscription-preview.component.scss']
})
export class BloggerSubscriptionPreviewComponent implements OnInit {
  formData: FormGroup;
  blogger: any;
  constructor(
    private bloggerService: BloggersService,
    private errorHandlerService: ErrorHandlerService
  ) { 
    this.formData = new FormGroup({
      nickname: new FormControl(''),
      email: new FormControl(''),
      facebookUrl: new FormControl(''),
      githubUrl:  new FormControl('')
    });
  }

  ngOnInit(): void { 

    this.bloggerService.getByToken()
      .subscribe(
          response => {
            this.blogger = response.body;
          },
          error => {
              this.errorHandlerService.handleRequestError(error);
          },
          () => {
              this.prepForm();
          }
      );
   
  }

  private prepForm(){

    this.formData = new FormGroup({
      nickname: new FormControl(this.blogger?.nickname, Validators.maxLength(20)),
      email: new FormControl(this.blogger?.email, Validators.email),
      facebookUrl: new FormControl(''),
      githubUrl:  new FormControl('')
    });
  }

  onDismiss(){
    this.formData.reset();
    this.prepForm()
  }

  onSubmit(data){
    console.log(data);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.formData.controls[controlName].hasError(errorName);
  }
}
