import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AccountService {

  constructor(private backendService: BackendService) { }

  registerUser(data: { Email: any; Password: any; LeadSource: string; IP: any; }): Observable<any> {
    return this.backendService.backendRequest('post', 'account/register', data);
  }
  confirm(token: string): Observable<any> {
    const data = { code: token };
    return this.backendService.backendRequest('get', 'account/confirmation', data, false);
  }
  resetPassword(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'account/ResetPassword', data);
  }
  forgotPassword(email: { email: any; }): Observable<any> {
    return this.backendService.backendRequest('post', 'account/ForgotPassword', email);
  }
  getNotificationsData(): Observable<any> {
    return this.backendService.backendRequest('get', 'account/Notifications', null, true);
  }
  getReportedIssuesData(): Observable<any> {
    return this.backendService.backendRequest('get', 'account/ReportedIssues', null, true);
  }
  getUserIP(): Observable<any> {
    return this.backendService.backendRequest('post', environment.IPCheckingServiceUrl);
  }
}
