import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UtilityService } from './utility.service';

@Injectable()
export class AuthService {

  authToken: string;
  private readonly tokenKeyName = 'bgut';
  private uToken: any;
  get userToken() { return this.uToken; }
  set userToken(token) {
    if (token && token.access_token) {
      this.uToken = token.access_token;
    } else {
      this.uToken = token;
    }
  }

  constructor(
    public jwtHelper: JwtHelperService
  ) {
    this.jwtHelper = new JwtHelperService();
    this.userToken = sessionStorage.getItem(this.tokenKeyName);
  }

  setUserTokenAndRemember(token) {
    this.clearUserToken();
    this.userToken = token.access_token;
    sessionStorage.setItem(this.tokenKeyName, this.userToken);
  }

  pickAuthenticationToken(): string {
     return this.authToken;
  }
  pickUserToken(): string {
    return this.userToken;
  }
  clearUserToken() {
    this.userToken = null;
    sessionStorage.removeItem(this.tokenKeyName);
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem(this.tokenKeyName);
    if (token === null) { return false; }
    return !this.jwtHelper.isTokenExpired(token);
  }

  public decode() {
    return this.jwtHelper.decodeToken(this.userToken);
  }

  public isExpectedRole(allowedRoles: string[]): boolean {
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }
    const token = sessionStorage.getItem(this.tokenKeyName);
    if (token === null) { return false; }
    const decodedToken = this.jwtHelper.decodeToken(token);
    if (!decodedToken) {
      console.log('Invalid token');
      return false;
    }
    return allowedRoles.includes(decodedToken.role);
  }
}
