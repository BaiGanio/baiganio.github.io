import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from '../../@core/angular-material.module';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterOutlet, AngularMaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  storedUser: any;
  reportIssueModalVisibility = false;

  constructor(
    // private router: Router,
    // private authService: AuthService,
    // private userDataService: UserDataService,
  ) {}

  ngOnInit() {
    // if (this.authService.isAuthenticated()) {
    //   this.userDataService.getUserByToken().subscribe(
    //     response => {
    //       this.storedUser = response.body;
    //       this.userDataService.setUserData(this.storedUser);
    //     },
    //     err => { console.log(err); },
    //     () => {
    //       this.storedUser = this.userDataService.getUserData();
    //     }
    //   );
    // }
  }

  isUserLogged(): boolean {
    return false;
    //return this.authService.isAuthenticated();
  }

  logOut() {
    // this.userDataService.logout();
    // this.router.navigate(['/login']);
  }
}
