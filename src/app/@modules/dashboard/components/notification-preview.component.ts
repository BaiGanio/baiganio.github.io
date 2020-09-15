import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';

@Component({
  selector: 'app-notification-preview',
  template:
  `
    <div class="view text-center">
      <div innerHtml = '{{data.model}}'></div>
    </div>
  `,
  styleUrls: ['./notification-preview.component.scss']
})
export class NotificationPreviewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NotificationPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData
  ) { }

  ngOnInit() { }
}
