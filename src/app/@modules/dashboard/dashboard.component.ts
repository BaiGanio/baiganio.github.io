import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@services/auth.service';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { UserDataService } from 'src/app/@services/user-data.service';
import { Store } from '@ngrx/store';
import { AppState, UserState } from 'src/app/@store/app.state';
import { UserView } from '../users/models/user-view';
import { SelectUserAction } from 'src/app/@store/actions/user.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() user: UserView;
  dashboardData: any;
  totalIssues: any;
  totalReceivedEmails = 0;
  totalEnrolledCourses = 0;
  totalSubscriptions = 0;
  totalArticles = 0;
  image = '';
  loading = false;
  userId = '';
  queryParams: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserDataService,
    private errorHandlerService: ErrorHandlerService,
    // private store: Store<UserState>
  ) {
    // this.store.select(x => x.selectedUser)
    // .subscribe((user: UserView) => this.user = user);
   }

  ngOnInit() {
    this.loading = true;
    this.image = './assets/images/no-profile-img.png';
    const token = this.authService.decode();
    this.userId = token.sub;
   // console.log(this.userId);
  //  this.store.subscribe(x => {
  //   console.log(x.user.selectedUser)
  //   this.storedUser = x.user.selectedUser;
  //  });

  //  this.userService.getUserById(this.userId)
  //       // .finally(() => this.isLoading = false)
  //       .subscribe((response: UserView) => this.store
  //         .dispatch(new SelectUserAction(response)));

    this.getInitDashboardData();

    // this.store.subscribe(x => {
    //   console.log(x.user.selectedUser)
    //   //this.storedUser = x.user.selectedUser;
    //  });
  }

  getRouterLink(){
    return '/articles';
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
        this.totalArticles = this.dashboardData.articlesCount || 0;
        this.image =
          response.body.user.image != null
          ? response.body.user.image
          : this.image;
        this.loading = false;
      },
      error => {
        this.errorHandlerService.handleRequestError(error);
        console.log(error);
        this.loading = false;
      }
    );
  }

  goToMyCourses() {
    this.router.navigate(['/courses/preview']);
  }

  goToMySubscriptions() {
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
