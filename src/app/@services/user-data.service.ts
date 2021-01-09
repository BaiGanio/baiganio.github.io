import { Injectable } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { UserViewModel } from '../@modules/users/models/user-view-model.module';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserDataService {
  userData: any;

  constructor(
    private eventBusService: EventBusService,
    private backendService: BackendService,
    private authService: AuthService
  ) { }

  setUserData(data: any): void {
    this.userData = data as UserViewModel;
    this.eventBusService.emitUpdateUserData(this.userData);
  }
  getUserData() {
    return this.userData;
  }

  updatePassword(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Users/UpdatePassword', data, true);
  }

  updateEmail(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Users/UpdateEmail', data, true);
  }

  updateProfile(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Users/UpdateProfile', data, true);
  }

  updateProfilePicture(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Users/UpdateProfilePicture', data, true);
  }

  sendIssueToAdmin(data: { Text: any; Img2Base64: string; }): Observable<any> {
    return this.backendService.backendRequest('post', 'Users/ReportIssue', data, true);
  }

  sendExceptionToAdmin(data: { SenderEmail: string; ErrorReport: string; MessageReport: string; }): Observable<any> {
    return this.backendService.backendRequest('post', 'Users/ReportException', data, true);
  }

  getUserByToken(): Observable<any> {
    return this.backendService.backendRequest('get', 'Identity', null, true);
  }

  getUserById(userId: string): Observable<any> {
    return this.backendService.backendRequest('get', 'Users/' + userId, null, true);
  }

  getUserIP(): Observable<any> {
    return this.backendService.backendRequest('get', environment.IPCheckingServiceUrl, null, true);
  }
  updateLastLoginDate(): Observable<any> {
    return this.backendService.backendRequest('get', 'Users/UpdateLastLogin', null, true);
  }
  getDasboardData(): Observable<any> {
    return this.backendService.backendRequest('get', 'users/Dashboard', null, true);
  }
  logout(): void {
    this.userData = null;
    this.authService.clearUserToken();
  }
}
