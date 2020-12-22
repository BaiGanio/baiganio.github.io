import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscribe4NotificationsComponent } from '../profile/components/subscribe4notifications/subscribe4notifications.component';
import { ChangePasswordComponent } from '../profile/components/change-password/change-password.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  //editNotifications() {
    //const $dialogRef =
     // this.dialog.open(Subscribe4NotificationsComponent, {
       // width: '400px',
       // data: {
         // model: { emailSubs: false }
        //},
        //autoFocus: false
      //});
  //}

  changePassword() {
    const $dialogRef =
     this.dialog.open(ChangePasswordComponent, {
       width: '400px',
        autoFocus: false
      });
  }
}
