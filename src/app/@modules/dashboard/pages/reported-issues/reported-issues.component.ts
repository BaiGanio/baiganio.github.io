import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/@services/account.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { MatDialog } from '@angular/material';
import { ReportedIssueViewModel } from '../../models/reported_issue-view-model.module';
import { ReportedIssuePreviewComponent } from '../../components/reported-issue-preview.component';

@Component({
  selector: 'app-reported-issues',
  templateUrl: './reported-issues.component.html',
  styleUrls: ['./reported-issues.component.scss']
})
export class ReportedIssuesComponent implements OnInit {
  loading = false;
  reportedIssuesArray = new Array<ReportedIssueViewModel>();
  reportedIssuesCount = 0;

  constructor(
    private accountService: AccountService,
    private errorHandlerService: ErrorHandlerService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.loading = true;
    this.accountService.getReportedIssuesData()
      .subscribe(response => {
        response.body.forEach(element => {
          console.log(response.body);
           const e = {
             Id: element.id || '',
             UserId: element.userId || '',
             BaseMethod: element.baseMethod || '',
             CreatedOn: element.createdOn || '',
             Message: element.message || '',
             EmailType: element.emailType || '',
             ReportedIssueModel: element.reportedIssueModel || '',
             RequestParams: element.requestParams || '',
             ResponseParams: element.responseParams || '',
             Service: element.service || '',
             TracingStatus: element.tracingStatus || ''
           };
          this.reportedIssuesArray.push(element as ReportedIssueViewModel);
        });
        this.reportedIssuesCount = this.reportedIssuesArray.length;
        this.loading = false;
      },
      err => {
        this.errorHandlerService.handleRequestError(err);
        this.loading = false;
      }
    );
  }

  goToReportedIssueHtml(rawHtml: string) {
    const $dialogRef =
        this.dialog.open(
            ReportedIssuePreviewComponent,
            {
              width: '70vw',
              maxHeight: '110vh',
              data: { model: rawHtml }
            }
        );
    $dialogRef.afterClosed().subscribe();
  }

}
