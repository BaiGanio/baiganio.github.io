import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { AuthService } from 'src/app/@services/auth.service';
import { BloggersService } from 'src/app/@services/bloggers.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-blogger-craftsman-view',
  templateUrl: './blogger-craftsman-view.component.html',
  styleUrls: ['./blogger-craftsman-view.component.scss']
})
export class BloggerCraftsmanViewComponent implements OnInit {
  formData: UntypedFormGroup;
  constructor(
    private bloggerService: BloggersService,
    private errorHandlerService: ErrorHandlerService,
    private authService: AuthService,
  ) { 
   
  }

  ngOnInit(): void { 
    this.formData = new UntypedFormGroup({
      nickname: new UntypedFormControl(''),
      email: new UntypedFormControl(''),
      facebookUrl: new UntypedFormControl(''),
      githubUrl:  new UntypedFormControl('')
    });
    // if (this.authService.isAuthenticated() && this.blogger === undefined) {
    
    // this.bloggerService.getByToken()
    //   .subscribe(
    //       response => {
    //         this.blogger = response.body;
    //       },
    //       error => {
    //           this.errorHandlerService.handleRequestError(error);
    //       },
    //       () => {
    //           this.prepForm();
    //       }  
    //   );
    // }
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.formData.controls[controlName].hasError(errorName);
  }

  onDismiss(){
    this.formData.reset();
   
  }

  onSubmit(data){
    alert("Here!");
    // this.loading = true;

    // this.bloggerService.update({ Nickname: data.nickname, Email: data.email, FacebookUrl: data.facebookUrl, GitHubUrl: data.githubUrl })
    // .subscribe(
    //     () => {
    //       this.getByToken();
    //     },
    //     error => {
    //         this.errorHandlerService.handleRequestError(error);
    //     },
    //     () => {
    //         this.formData.reset();
    //         this.prepForm();
    //         this.loading = false;
    //     }
    // );
    
  }


}
