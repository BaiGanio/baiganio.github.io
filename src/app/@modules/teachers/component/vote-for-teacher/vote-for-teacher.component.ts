import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { TeacherPreviewModel } from '../../models/teacher-preview.model';
import { TeacherService } from 'src/app/@services/teacher.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-vote-for-teacher',
  templateUrl: './vote-for-teacher.component.html',
  styleUrls: ['./vote-for-teacher.component.scss']
})
export class VoteForTeacherComponent implements OnInit {
  teachers = new Array<TeacherPreviewModel>();
  loading = false;
  totalTeachers = 0;

  constructor(
    public dialogRef: MatDialogRef<VoteForTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData,
    private teacherService: TeacherService,
    private errorHandlerService: ErrorHandlerService,
  ) { }

  ngOnInit() {
    this.loading = true;
  }

  dismiss() {
    this.dialogRef.close();
  }

  vote() {
    this.dialogRef.close(true);
  }

}