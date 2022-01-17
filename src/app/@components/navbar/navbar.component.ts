import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';
import { UserView } from 'src/app/@modules/users/models/user-view';
import { AuthService } from 'src/app/@services/auth.service';
import { UserDataService } from 'src/app/@services/user-data.service';
import { AppState, UserState } from 'src/app/@store/app.state';
import { selectUser } from 'src/app/@store/selectors/user.selector';
import { SelectUserAction } from 'src/app/@store/actions/user.actions';
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
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      if(!this.storedUser) {
        this.userDataService.getUserByToken()
        .subscribe(
          response => { this.storedUser =  response.body; },
          error => { console.log(error); }
        );
      }
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
