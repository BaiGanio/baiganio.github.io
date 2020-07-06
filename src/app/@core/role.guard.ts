import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from '../@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  roles: any;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot) {
    const allowedRoles = next.data.allowedRoles;
    const payload = this.authService.isExpectedRole(allowedRoles);
    if (!payload) {
      // if not authorized, show access denied message
      this.router.navigate(['/403']);
    }
    return payload;
  }

  canActivateChild(next: ActivatedRouteSnapshot) {
    const allowedRoles = next.data.allowedRoles;
    const payload = this.authService.isExpectedRole(allowedRoles);
    if (!payload) {
      // if not authorized, show access denied message
      this.router.navigate(['/403']);
    }
    return payload;
  }
}
