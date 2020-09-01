import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserDataService } from '../@services/user-data.service';
import { BackendService } from '../@services/backend.service';
import { AuthService } from '../@services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  storedUser: any;

  constructor(
    private router: Router,
    private authservice: AuthService,
    private userService: UserDataService,
    private backendService: BackendService
  ) { }

  canActivate() {
    if (!this.authservice.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    } else {
      this.storedUser = this.userService.getUserData();
      if (this.storedUser.id  === undefined) {
        this.userService.getUserByToken().subscribe(
          response => { this.storedUser = response.body; },
          error => {
            console.log('auth guard error!');
            this.router.navigate(['/login']);
            return false;
          },
          () => {
            this.userService.setUserData(this.storedUser);
            return true;
          }
        );
      }
      return false;
    }
  }
}
