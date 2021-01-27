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
import { InitializeUserAction } from 'src/app/@store/actions/user.actions';
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
  }

  ngOnInit() { 
    if(this.authService.isAuthenticated()) {
      this.userDataService.getUserByToken().subscribe(
        response => {
            console.log(response.body);
            const u = {
                Id: response.body.id,
                FirstName: response.body.firstName,
                LastName: response.body.lastName,
                Email: response.body.email,
                Roles: response.body.roles
            };
             this.storedUser = u as UserView;
            // this.store.dispatch(new InitializeUserAction(response.body));
            // this.userDataService.setUserData(this.storedUser);
        },
        error => {
         // this.errorHandlerService.handleRequestError(error);
        },
        () => {
          // this.store.pipe(select(selectUser))
          //   .subscribe((state => this.storedUser = state));
          //   alert(this.storedUser);
          
        }
    );
      //      this.store.subscribe(x => {
      //       this.storedUser = x.user.selectedUser;
      //           });
      // console.log(this.storedUser);
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
