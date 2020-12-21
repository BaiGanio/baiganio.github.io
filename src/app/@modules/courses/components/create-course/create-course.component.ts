import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { CoursesService } from 'src/app/@services/courses.service';

@Component({
  selector: 'app-create-course',
  template:
  `
  <div mat-dialog-content class="row justify-content-center">
    <form [formGroup]="addCourseForm" class="text-center">
    <mat-form-field class="w-75">
        <input type="text" matInput formControlName='courseName' placeholder="Course Name:" required>
        <mat-error *ngIf="addCourseForm.get('courseName').hasError('required')">
        Course Name is required!
    </mat-error>
    </mat-form-field>
    <button
    class="ml-3"
        mat-raised-button 
        (click)="createCourse()"
        color="primary"
        [disabled]="!addCourseForm.valid || !addCourseForm.dirty">
        Add Course
    </button>
    </form>
    </div>
  `,
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {
    addCourseForm: FormGroup;
    loading = false;

    constructor(
    public dialogRef: MatDialogRef<CreateCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private errorHandlerService: ErrorHandlerService,
    private coursesService: CoursesService
    ) {
    this.addCourseForm =
        this.formBuilder.group({
            courseName: ['', Validators.required]
        });
    }

    ngOnInit() {}

    createCourse() {
        this.loading = true;
        const entry = { Name: this.addCourseForm.value.courseName };
        this.dialogRef.close(entry);  
        this.loading = false; 
    }
}
