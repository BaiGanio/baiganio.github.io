import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDataService } from './user-data.service';
import { ErrorComponent } from '../@components/error/error.component';
import { ErrorModel } from '../@shared/models/error-model.module';

@Injectable()
export class ErrorHandlerService {
  loading = true;
  user: any;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService: UserDataService,
    private snackbar: MatSnackBar) { }

  handleRequestError(error: { status: any; }) {
    const status = error.status;
    // if (error.error.type === 'error' && status === 0) {
    if (status === 0) {
      return this.router.navigate(['/server-alert']);
    } else if (status === 404) {
      // const $dialogRef =
      // this.dialog.open(
      //     ErrorComponent,
      //     { data: { model: new ErrorModel(status) } }
      // );
    } else if (status === 40) {
      const $dialogRef =
      this.dialog.open(
          ErrorComponent,
          { data: { model: new ErrorModel(error) } }
      );
    } else if (status) {
      const $dialogRef =
        this.dialog.open(
            ErrorComponent,
            { data: { model: new ErrorModel(error) } }
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
    }
  }
}
