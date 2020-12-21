import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { SubscriptionPreviewModel } from '../../models/subscription-preview-model.module';

@Component({
  selector: 'app-subscription-preview',
  templateUrl: './subscription-preview.component.html',
  styleUrls: ['./subscription-preview.component.scss']
})
export class SubscriptionPreviewComponent implements OnInit {
subscription: SubscriptionPreviewModel;
  constructor(
    public dialogRef: MatDialogRef<SubscriptionPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData
  ) { }

  ngOnInit() {
    this.subscription = this.data.model;
  }

  onRejectClick() {
    this.dialogRef.close();
  }

}
