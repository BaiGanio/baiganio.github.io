import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@services/auth.service';
import { UserDataService } from 'src/app/@services/user-data.service';

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
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    if(!this.storedUser && this.authService.isAuthenticated()) {
      this.userDataService.getUserByToken()
        .subscribe(
          response => { this.storedUser =  response.body; },
          error => { console.log(error); }
        );
    }
  }

  isUserLogged(): boolean {
    return this.authService.isAuthenticated();
  }

  logOut() {
    this.userDataService.logout();
    this.router.navigate(['/account/login']);
  }
}
