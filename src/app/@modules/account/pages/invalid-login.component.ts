import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { ErrorModel } from 'src/app/@shared/models/error-model.module';

@Component({
  selector: 'app-invalid-login',
  template:
  `
  <div class="text-center">
    <div mat-dialog-content>
      <mat-card>
        <mat-card-content>
          <h4 class="card-title"> Ops...!
          <img src="../assets/images/bd2.gif" alt="" />
          </h4>
          <h5>{{this.model.Message}}</h5>
          <br>
          <button class="btn-primary" mat-raised-button (click)="dismiss()">Dismiss</button>
        </mat-card-content>
      </mat-card>
    </div>
  </div>
  `
})

export class InvalidLoginComponent implements OnInit {

  model: ErrorModel;

  constructor(
    public dialogRef: MatDialogRef<InvalidLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData
  ) { }

  ngOnInit() {
    this.model = this.data.model as ErrorModel;
  }

  dismiss() {
    this.dialogRef.close();
  }
}
