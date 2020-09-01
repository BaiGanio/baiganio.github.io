import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { CoursePreviewModel } from '../../models/course-preview-model.module';

@Component({
  selector: 'app-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.scss']
})
export class CoursePreviewComponent implements OnInit {
  course: CoursePreviewModel;
  constructor(
    public dialogRef: MatDialogRef<CoursePreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.course = this.data.model;
    console.log(this.course);
  }

  onRejectClick() {
    this.dialogRef.close();
  }

}
