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
// import { UserDataService } from 'src/app/@services/user-data.service';
// import { AuthService } from 'src/app/@services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  storedUser: UserView;
  reportIssueModalVisibility = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userDataService: UserDataService,
    private store: Store<AppState>
  ) {
    this.store.pipe(select(selectUser))
      .subscribe((state => this.storedUser = state));
        // // // this.store.pipe(select(selectUser))
        //         // //   .subscribe((state => jj = state));
      
        //           console.log(jj);
  }

  ngOnInit() { 
    if(this.authService.isAuthenticated()) {
           this.store.subscribe(x => {
            this.storedUser = x.user.selectedUser;
                });
      console.log(this.storedUser);
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
