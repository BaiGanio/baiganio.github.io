import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { ErrorView } from 'src/app/@shared/interfaces/error-view.interface';

@Component({
  selector: 'app-unauthorized',
  template:
  `
  <div class="content">
    <div>
      <h1> Ooops... <span>{{error.status}} Unauthorized</span></h1>
      <hr/>
      <br/>
      <h4>
        {{error.message}}
      </h4> 
      <h2>Lacks valid authentication credentials for the target resource!</h2> 
      <br/>  
      <hr/>
      <br/>  
      <button
        mat-raised-button 
        color="primary"
        (click) = dismiss()
        style="width:30%">
        Dismiss
      </button>
    </div>
  </div>
  `,
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {
  error: any;

  constructor(
    public dialogRef: MatDialogRef<UnauthorizedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData
  ) { }

  ngOnInit() {
    this.error = this.data.model;
console.log(this.error);
  }

  dismiss() {
    this.dialogRef.close();
  }
}
