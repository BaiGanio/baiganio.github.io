import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { ToDo } from 'src/app/@shared/models/todo.model';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateToDoComponent implements OnInit {
  updateToDoForm: UntypedFormGroup;
  todo: ToDo;
  public isDone = false;
  constructor(
    public dialogRef: MatDialogRef<UpdateToDoComponent>,
    @Inject(MAT_DIALOG_DATA) data: BaseDialogData,
    private formBuilder: UntypedFormBuilder,
  ) {
    const c = {
      Id: data.model.Id,
      Name: data.model.Name,
      Description: data.model.Description,
      Date: data.model.Date,
      IsDone: data.model.IsDone,
    };
    this.todo = c as ToDo;
    this.isDone = this.todo.IsDone;
    this.updateToDoForm =
      this.formBuilder.group({
          name: [this.todo.Name],
          description: [this.todo.Description],
          date: [this.todo.Date],
      });

  }

  ngOnInit(){
    this.updateToDoForm =
    this.formBuilder.group({
        name: [this.todo.Name],
        description: [this.todo.Description],
        date: [this.todo.Date],
    });}

  update() {
    let todo = new ToDo();
    todo.Id = this.todo.Id;
    todo.Name = this.updateToDoForm.value.name;
    todo.Description = this.updateToDoForm.value.description;
    todo.Date = this.updateToDoForm.value.date;
    todo.IsDone = this.isDone;
    this.dialogRef.close(todo);
  }

  dismiss(){
    this.dialogRef.close();
  }

  checked(){
    this.isDone = !this.isDone;
  }

}
