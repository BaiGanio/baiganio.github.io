import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { BaseDialogData } from '../../interfaces/base-dialog.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

title: string;
  constructor(
    // public dialogRef: MatDialogRef<TermsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: BaseDialogData,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // this.user = this.data.model;
    this.title = 'this.data.title';
  }

  onRejectClick() {
    // this.dialogRef.close();
  }

}
