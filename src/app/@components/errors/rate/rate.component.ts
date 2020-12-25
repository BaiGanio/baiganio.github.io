import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';

@Component({
  selector: 'app-rate',
  template:
  `
  <div class="content">
    <div>
      <h1>You about to rate {{model?.firstName}} {{model?.lastName}} with 1 start</h1>
      <hr/>
      <br/> 
      <h3></h3>
      nice-star image-goes-here
      <br/>  
      <h5></h5>  
      <br/>  
      <hr/>
      <br/>  
      <button mat-raised-button color="primary"
        (click) = dismiss()>
        Dismiss
      </button>
      <button mat-raised-button color="primary"
        (click) = dismiss()>
        Rate
      </button>
    </div>
  </div>
  `,
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  model: any;
  constructor(
    public dialogRef: MatDialogRef<RateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData
  ) { }

  ngOnInit(): void {
    this.model = this.data.model;
  }

  dismiss() {
    this.dialogRef.close();
  }
}
