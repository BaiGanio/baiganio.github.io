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

  handleRequestError(error: { status: any; message: string, error: string}) {
    const status = error.status;
    if (status === 0) {
      return this.router.navigate(['/server-alert']);
    } else{
      console.log(error);
      const message = error.message;
      this.snackbar.open(`${error.error}`, 'X', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: 'dangerSnackbar'
        });
    }
  }
}
