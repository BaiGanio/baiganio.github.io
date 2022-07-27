import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/@services/auth.service';
import { BloggersService } from 'src/app/@services/bloggers.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-blogger-subscription-preview',
  templateUrl: './blogger-subscription-preview.component.html',
  styleUrls: ['./blogger-subscription-preview.component.scss']
})
export class BloggerSubscriptionPreviewComponent implements OnInit {
  formData: UntypedFormGroup;
  blogger: any;
  loading = false;
  constructor(
    private bloggerService: BloggersService,
    private errorHandlerService: ErrorHandlerService,
    private authService: AuthService,
  ) {
    this.formData = new UntypedFormGroup({
      nickname: new UntypedFormControl(''),
      email: new UntypedFormControl(''),
      facebookUrl: new UntypedFormControl(''),
      githubUrl:  new UntypedFormControl('')
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated() && this.blogger === undefined) {

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
  }

  private prepForm(){
    this.formData = new UntypedFormGroup({
      nickname: new UntypedFormControl(this.blogger?.nickname, Validators.maxLength(20)),
      email: new UntypedFormControl(this.blogger?.email, Validators.email),
      facebookUrl: new UntypedFormControl(''),
      githubUrl:  new UntypedFormControl('')
    });
  }

  onDismiss(){
    this.formData.reset();
    this.prepForm()
  }

  onSubmit(data){
    this.loading = true;

    this.bloggerService.update({ Nickname: data.nickname, Email: data.email, FacebookUrl: data.facebookUrl, GitHubUrl: data.githubUrl })
    .subscribe(
        () => {
          this.getByToken();
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


  private getByToken() {
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

  public checkError = (controlName: string, errorName: string) => {
    return this.formData.controls[controlName].hasError(errorName);
  }
}
