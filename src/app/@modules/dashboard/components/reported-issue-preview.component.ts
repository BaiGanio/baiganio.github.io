import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';

@Component({
  selector: 'app-reported-issue-preview',
  template:
  `
    <div class="view text-center">
      <div innerHtml = '{{data.model}}'></div>
    </div>
  `
})
export class ReportedIssuePreviewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReportedIssuePreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData
  ) { }

  ngOnInit() { }
}