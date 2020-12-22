import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subscribe4notifications',
  templateUrl: 'subscribe4notifications.component.html',
  styleUrls: ['./subscribe4notifications.component.scss']
})

export class Subscribe4NotificationsComponent implements OnInit {
  notifySubsFG: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<Subscribe4NotificationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.notifySubsFG = this.formBuilder.group({
      emailSubs: [this.data.model.emailSubs],
      gsmSubs: [this.data.model.gsmSubs],
      phoneNumber: [this.data.model.phoneNumber]
    });
  }

  onCloseClick() {
    this.dialogRef.close();
  }

  updateNotifications() {
    console.log(this.notifySubsFG.value);
    this.dialogRef.close();
  }
}
