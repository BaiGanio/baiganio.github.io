import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class SubscriptionService {

  constructor(private backendService: BackendService, private http: HttpClient) { }

  getAllSubscriptions(): Observable<any> {
    //return this.backendService.backendRequest('get', 'Subscriptions', null, false);
    return this.http.get(`${environment.apiUrl}` + 'subscriptions');
  }

  getUserActiveSubscriptions(): Observable<any> {
    return this.backendService.backendRequest('get', 'Subscriptions/GetUserActiveSubscriptions', null, true);
  }

  sendRequestForSub(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Subscriptions/Request4Subscription', data, true);
  }

  confirmRequestForSub(token: any): Observable<any> {
    const data = { code: token };
    return this.backendService.backendRequest('get', 'Subscriptions/Confirm', data, false);
  }

  getSubscriptionById(id: string): Observable<any> {
    return this.backendService.backendRequest('get', 'Subscriptions/' + id);
  }

  getSubscriptionsWithConfirmedUserIds(): Observable<any> {
    return this.backendService.backendRequest('get', 'Subscriptions/WithConfirmedUserIds', null, true);
  }
}
