import { Injectable } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { UserView } from '../@modules/users/models/user-view';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { UserState } from '../@store/app.state';

@Injectable()
export class UserDataService {
  userData: any;
  userData$: Observable<UserView>;
  constructor(
    private eventBusService: EventBusService,
    private backendService: BackendService,
    private authService: AuthService
  ) { }

  setUserData(data: any): void {
    this.userData = data as UserView;
    this.eventBusService.emitUpdateUserData(this.userData);
  }
  getUserData() {
    return this.userData;
  }

  updatePassword(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Account/UpdatePassword', data, true);
  }

  updateEmail(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Account/UpdateEmail', data, true);
  }

  updateProfile(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Account/UpdateProfile', data, true);
  }

  updateProfilePicture(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Account/UpdateProfilePicture', data, true);
  }

  sendIssueToAdmin(data: { Text: any; Img2Base64: string; }): Observable<any> {
    return this.backendService.backendRequest('post', 'Account/ReportIssue', data, true);
  }

  sendExceptionToAdmin(data: { SenderEmail: string; ErrorReport: string; MessageReport: string; }): Observable<any> {
    return this.backendService.backendRequest('post', 'Account/ReportException', data, true);
  }

  getUserByToken(): Observable<any> {
    return this.backendService.backendRequest('get', 'Account', null, true);
  }

  getUserById(userId: string): Observable<any> {
    return this.backendService.backendRequest('get', 'Account/' + userId, null, true);
  }

  getUserIP(): Observable<any> {
    return this.backendService.backendRequest('get', environment.IPCheckingServiceUrl, null, true);
  }
  updateLastLoginDate(): Observable<any> {
    return this.backendService.backendRequest('get', 'Account/UpdateLastLogin', null, true);
  }
  getDasboardData(): Observable<any> {
    return this.backendService.backendRequest('get', 'Account/Dashboard', null, true);
  }
  logout(): void {
    this.userData = null;
    this.authService.clearUserToken();
  }
}
