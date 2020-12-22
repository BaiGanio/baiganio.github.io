import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { ErrorView } from 'src/app/@shared/interfaces/error-view.interface';

@Component({
  selector: 'app-bad-request',
  template:
  `
  <div class="content">
    <div>
      <h1>Ooops... <span>{{error.Status}} Bad Request</span></h1>
      <hr/>
      <br/> 
      <h3>{{error.ErrorText}}</h3>
      <br/>  
      <h5>{{error.ErrorDescription}}</h5>      
      <br/>  
      <hr/>
      <br/>  
      <button mat-raised-button color="primary"
        (click) = dismiss() style="width:30%">
        Dismiss
      </button>
    </div>
  </div>
  `,
  styleUrls: ['./bad-request.component.scss']
})
export class BadRequestComponent implements OnInit {
  error: ErrorView;

  constructor(
    public dialogRef: MatDialogRef<BadRequestComponent>,
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
