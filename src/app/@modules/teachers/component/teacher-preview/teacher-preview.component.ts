import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormBuilder } from '@angular/forms';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { TeacherPreviewModel } from '../../models/teacher-preview.model';


@Component({
  selector: 'app-teacher-preview',
  templateUrl: './teacher-preview.component.html',
  styleUrls: ['./teacher-preview.component.scss']
})
export class TeacherPreviewComponent implements OnInit {
teacher: TeacherPreviewModel;
  constructor(
    public dialogRef: MatDialogRef<TeacherPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData,
    private formBuilder: UntypedFormBuilder
  ) { }

  ngOnInit() {
    this.teacher = this.data.model;
  }

  onRejectClick() {
    this.dialogRef.close();
  }

}