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
      <h3> Ooops... <span>Error shows up!!!</span></h3>
      <hr/>
      <br/> 
      <h3>
        {{error.status}} Unauthorized
      </h3> 
      <h5>Lacks valid authentication credentials for the target resource!</h5>
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

  }

  dismiss() {
    this.dialogRef.close();
  }
}
