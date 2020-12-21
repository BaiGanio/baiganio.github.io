import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { ErrorView } from 'src/app/@shared/interfaces/error-view.interface';
import { BaseDialogData } from '../../interfaces/base-dialog.interface';

@Component({
  selector: 'app-error',
  template:
  `
  <div class="text-center">
    <div>
      <h3> Ops... Error shows up!!!
        <img src="../assets/images/bd2.gif" alt="" />
      </h3>
      <hr/>
      <h4>{{error.ErrorText}}</h4>
      <div style="width:50%; margin:auto;"  class="text-center">
        {{error.Message}}
      </div>
      <hr/>
      <button
      mat-stroked-button color='warn'
        (click) = dismiss()
        style="width:50%">
        Dismiss
      </button>
    </div>
  </div>
  `,
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  error: ErrorView;

  constructor(
    public dialogRef: MatDialogRef<ErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData
  ) { }

  ngOnInit() {
    this.error = this.data.model;
  }

  dismiss() {
    this.dialogRef.close();
  }

  // sendExceptionToAdmin() {
  //   this.dialogRef.close(this.error.Error);
  // }
}
