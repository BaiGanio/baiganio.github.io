import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.scss']
})
export class DeleteToDoComponent implements OnInit {
  model:any;
  constructor(
    public dialogRef: MatDialogRef<DeleteToDoComponent>,
    @Inject(MAT_DIALOG_DATA) data: BaseDialogData
  ) {
    this.model = data;
  }

  ngOnInit(): void {console.log(' Lifecycle methods should not be empty');}

  confirm() {
    this.dialogRef.close(true);
  }
}
