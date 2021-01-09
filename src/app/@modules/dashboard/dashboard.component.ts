import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@services/auth.service';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { UserDataService } from 'src/app/@services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData: any;
  totalIssues: any;
  totalReceivedEmails = 0;
  totalEnrolledCourses = 0;
  totalSubscriptions = 0;
  totalPosts = 0;
  image = '';
  loading = false;
  userId = '';
  queryParams: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserDataService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.image = './assets/images/no-profile-img.png';
    const token = this.authService.decode();
    this.userId = token.sub;
   // console.log(this.userId);
    this.getInitDashboardData();
  }

  getInitDashboardData() {
    this.userService.getDasboardData().subscribe(
      response => {
        this.dashboardData = response.body;
        // console.log(response.body);
        this.totalIssues = this.dashboardData.reportedIssuesFromUserCount || 0;
        this.totalReceivedEmails = this.dashboardData.sentEmailsToUserCount || 0;
        this.totalEnrolledCourses = this.dashboardData.enrolledCoursesCount || 0;
        this.totalSubscriptions = this.dashboardData.user.subscriptions.length || 0;
        this.totalPosts = this.dashboardData.user.subscriptions.length || 0;
        this.image =
          response.body.user.image != null
          ? response.body.user.image
          : this.image;
        this.loading = false;
      },
      error => { 
        this.errorHandlerService.handleRequestError(error);
        this.loading = false;
      }
    );
  }

  goToMyCourses() {
    this.router.navigate(['/courses/preview']);
  }

  goToMySubscriptions() {
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate(['/subscriptions/preview']), { queryParams: { id: this.userId } };
  }

  goToMyProfile() {
    this.router.navigate(['profile']);
  }

  goToMyReceivedNotifications() {
    this.loading = true;
    this.router.navigate(['/dashboard/notifications']);
  }

  goToMyReportedIssues() {
    this.loading = true;
    this.router.navigate(['/dashboard/reported-issues']);
  }
}
