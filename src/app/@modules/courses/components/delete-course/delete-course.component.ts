import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';

@Component({
    selector: 'app-delete-entity',
    template:
    `
    <div class="text-center">
      <h3>Warning!!!</h3>
        <mat-card-content>
        <hr/>
        <h5>{{model.title}}</h5>
        <h5>This action can't be undone!</h5>
        <h5>Delete anyway?</h5>
        <hr/>
        <button mat-raised-button class="ml-3" (click)="dismiss()">{{model.rejectText}}</button>
        <button mat-raised-button color='warn' class="ml-3" (click)="delete()">{{model.confirmText}}</button>
      </mat-card-content>
    </div>
    `,
    styleUrls: ['./delete-course.component.scss']
})
export class DeleteCourseComponent implements OnInit {
    model: any;
    loading = false;

    constructor(
        public dialogRef: MatDialogRef<DeleteCourseComponent>,
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
