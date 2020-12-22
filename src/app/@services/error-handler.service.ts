import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../@components/errors/error/error.component';
import { ErrorModel } from '../@shared/models/error-model.module';
import { UnauthorizedComponent } from '../@components/errors/unauthorized/unauthorized.component';
import { ServerErrorModel } from '../@shared/models/server-error-model.module';
import { ServerErrorComponent } from '../@components/errors/server-error/server-error.component';
import { BadRequestModel } from '../@shared/models/bad-request-model.module';
import { BadRequestComponent } from '../@components/errors/bad-request/bad-request.component';

@Injectable()
export class ErrorHandlerService {
  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  handleRequestError(error: { status: any; }) {
    const status = error.status;
    if (status === 0) {
      return this.router.navigate(['/server-alert']);
    } else if (status === 400) {
      let model = new BadRequestModel(error);
      this.dialog.open(
          BadRequestComponent,
          { data: { model: model } }
      );
    } else if (status === 401) {      
      this.dialog.open(
          UnauthorizedComponent,
          { data: { model: error } }
      );
    } else if (status === 404) {
      return this.router.navigate(['/not-found']);
    } else if (status == 500) {
        let model = new ServerErrorModel(error);
        this.dialog.open(
            ServerErrorComponent,
            { data: { model: model } }
        );
      // $dialogRef.afterClosed().subscribe(
      //   response => {
      //     if (response) {
      //       this.loading = true;
      //       this.user = this.userService.getUserData();
      //       const sendErrorToAdmin = {
      //           SenderEmail:  this.user.email,
      //           ErrorReport: error.error ,
      //           MessageReport: error.message
      //         };
      //       this.userService.sendExceptionToAdmin(sendErrorToAdmin)
      //         .subscribe(() => {
      //           this.loading = false;
      //           // show info
      //           this.snackbar.open('Message sent successful.', 'OK', {
      //             duration: 5000,
      //                         verticalPosition: 'top',
      //             panelClass: 'successSnackbar'
      //           });
      //       }, () => {
      //         this.loading = false;
      //         // show info
      //         this.snackbar.open('Message can\'t be send!', 'X', {
      //           duration: 5000,
      //           horizontalPosition: 'right',
      //           verticalPosition: 'top',
      //           panelClass: 'dangerSnackbar'
      //         });
      //       });
      //       // this.handleRequestError(error);
      //     }
      //   }
      // );
    } else if (status) {
      this.dialog.open(
          ErrorComponent,
          { data: { model: new ErrorModel(error) } }
      );
    }
  }
}
