import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { ToDo } from 'src/app/@shared/models/todo.model';

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

  ngOnInit(): void {}

  confirm() {
    this.dialogRef.close(true);
  }
}
