import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserView } from 'src/app/@modules/users/models/user-view';
import { AuthService } from 'src/app/@services/auth.service';
import { UserDataService } from 'src/app/@services/user-data.service';
// import { UserDataService } from 'src/app/@services/user-data.service';
// import { AuthService } from 'src/app/@services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  storedUser: any;
  reportIssueModalVisibility = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userDataService: UserDataService,
  ) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.userDataService.getUserByToken().subscribe(
        response => {
          this.storedUser = response.body;
          this.userDataService.setUserData(this.storedUser);
        },
        err => { console.log(err); },
        () => {
          this.storedUser = this.userDataService.getUserData();
        }
      );
    }
  }

  isUserLogged(): boolean {
    return this.authService.isAuthenticated();
  }

  logOut() {
    this.userDataService.logout();
    this.router.navigate(['/login']);
  }
}
