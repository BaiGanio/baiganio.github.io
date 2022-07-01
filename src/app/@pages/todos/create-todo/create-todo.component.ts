import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToDo } from 'src/app/@shared/models/todo.model';

@Component({
  selector: 'app-create-todo',
  template:
  `
  <div mat-dialog-content class="row justify-content-center">
    <form [formGroup]="createToDoForm" class="text-center">
    <mat-form-field class="w-75">
        <input type="text" matInput formControlName='name' placeholder="Title" required>
        <mat-error *ngIf="createToDoForm.get('name').hasError('required')">
        Name is required!
    </mat-error>
    </mat-form-field>
    <mat-form-field class="w-75">
    <input type="text" matInput formControlName='description' placeholder="Description">
    </mat-form-field>
    <mat-form-field class="w-75">
    <input
    matInput
    [matDatepicker]="startDatePicker"
    formControlName="date"
    placeholder="Date" required>
    <mat-datepicker-toggle matSuffix [for]="startDatePicker"></mat-datepicker-toggle>
    <mat-datepicker #startDatePicker></mat-datepicker>
    <mat-error *ngIf="createToDoForm.get('date').hasError('required')">
    Date is required!
    </mat-error>
    </mat-form-field>
    <p></p>
    <button
      class="ml-3"
      mat-stroked-button
      (click)="create()"
      color="primary"
      [disabled]="!createToDoForm.valid || !createToDoForm.dirty">
       Confirm
    </button>
    </form>
    </div>
  `
})
export class CreateToDoComponent implements OnInit {
  createToDoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateToDoComponent>,
    private formBuilder: FormBuilder,
  ) {
    this.createToDoForm =
    this.formBuilder.group({
        name: ['', Validators.required],
        description: [''],
        date: ['', Validators.required],
    });
  }

  ngOnInit(): void {console.log(' Lifecycle methods should not be empty');
  }

  create() {
    let todo = new ToDo();
    todo.Name = this.createToDoForm.value.name;
    todo.Description = this.createToDoForm.value.description;
    todo.Date = this.createToDoForm.value.date;
    this.dialogRef.close(todo);
  }
}
