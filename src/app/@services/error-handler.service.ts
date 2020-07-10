import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ErrorModel } from '../@shared/interfaces/error-model.module';
import { UserDataService } from './user-data.service';
import { ErrorComponent } from '../@shared/components/error/error.component';

@Injectable()
export class ErrorHandlerService {
  loading = true;
  user: any;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService: UserDataService,
    private snackbar: MatSnackBar) { }

  handleRequestError(error) {
    const status = error.status;
    // if (error.error.type === 'error' && status === 0) {
    if (status === 0) {
      return this.router.navigate(['/server-alert']);
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
