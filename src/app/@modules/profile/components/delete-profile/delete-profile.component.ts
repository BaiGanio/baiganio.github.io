import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit {
  model: any;
  loading = false;

  constructor(
      public dialogRef: MatDialogRef<DeleteProfileComponent>,
      @Inject(MAT_DIALOG_DATA) public data: BaseDialogData
  ) { }

  ngOnInit() {
      this.model = this.data;
  }

  dismiss() {
      this.dialogRef.close();
  }

  delete() {
      this.dialogRef.close(true);
  }

}
