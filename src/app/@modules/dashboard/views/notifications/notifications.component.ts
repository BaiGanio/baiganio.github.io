import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { AccountService } from 'src/app/@services/account.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationViewModel } from '../../models/notification-view-model.module';
import { NotificationPreviewComponent } from '../../components/notification-preview.component';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  loading = false;
  notificationsArray = new Array<NotificationViewModel>();
  notificationsCount = 0;


  constructor(private accountService: AccountService,
              private errorHandlerService: ErrorHandlerService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loading = true;
    this.accountService.getNotificationsData()
      .subscribe(response => {
        console.log(response);
        response.body.forEach(element => {
          const e = {
            Id: element.id || '',
            UserId: element.userId || '',
            BaseMethod: element.baseMethod || '',
            CreatedOn: element.createdOn || '',
            Message: element.message || '',
            EmailType: element.emailType || '',
            NotificationsModel: element.Model || '',
            RequestParams: element.requestParams || '',
            ResponseParams: element.responseParams || '',
            Service: element.service || '',
            TracingStatus: element.tracingStatus
          };
          this.notificationsArray.push(element as NotificationViewModel);
        });
        this.notificationsCount = this.notificationsArray.length;
        this.loading = false;
      },
      err => {
        this.errorHandlerService.handleRequestError(err);
        this.loading = false;
      }
    );
  }

  goToHtml(rawHtml: string) {
    const $dialogRef =
        this.dialog.open(
              NotificationPreviewComponent,
            {
              width: '50vw',
              maxHeight: '110vh',
              data: { model: rawHtml }
            }
        );
    $dialogRef.afterClosed().subscribe();
  }

  getCssClass(emailType: string) {
    if (emailType === 'SubscriptionConfirmation' ) {
      return 'card-subscription';
    }
    if (emailType === 'AccountConfirmation') {
      return 'card-account-confirmation';
    }
    if (emailType === 'CourseEnrollmentConfirmation') {
      return 'card-course-enrollment';
    }
    if (emailType === 'ForgotPassword') {
      return 'card-forgotpass';
    }
  }


}
