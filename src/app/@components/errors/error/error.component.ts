import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { ErrorView } from 'src/app/@shared/interfaces/error-view.interface';
import { BaseDialogData } from '../../../@shared/interfaces/base-dialog.interface';



// <img src="../assets/images/bd2.gif" alt="" />
      
@Component({
  selector: 'app-error',
  template:
  `
  <div class="content">
    <div>
      <h3> Ooops... <span>Error!!!</span></h3>
      <hr/>
      <br/> 
      <h3>
        {{error.ErrorText}}
      </h3> 
      <h5>{{error.ErrorDescription || error.Status}}</h5>
      <br/>  
      <hr/>
      <br/>  
      <button class="btn btn-outline-info"
        (click) = dismiss()
        style="width:30%">
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
