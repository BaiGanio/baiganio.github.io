import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorComponent } from '../@components/errors/error/error.component';
import { ErrorModel } from '../@shared/models/error-model.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorHandlerService {
  constructor(
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  handleRequestError(error: any) {
    const status = error.status;
    if (status === 0) {
      return this.router.navigate(['/server-alert']);
    } else if(status === 415) {
      let message: string = `${error.message} - ${error.error.title}`;
      this.callErrorSnackBar(message);
    } else{
      console.log(error);
      let message: string = error.error || error.message;
      console.log(message);
      this.callErrorSnackBar(message);
    }
  }

  private callErrorSnackBar(message: string){
    this.snackbar.open(message, 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'errorSnackbar'
    });
  }
}
