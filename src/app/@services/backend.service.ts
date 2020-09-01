import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient, private authservice: AuthService) { }

  backendRequest(requestType, requestTarget, requestData?, useUserToken?): Observable<any> {
    // if (!this.authservice.authToken) {
    //   const req = this.getClientAccessToken()
    //     .pipe(flatMap(
    //       (response) => {
    //         console.log(response);
    //         const authToken = response;
    //         this.authservice.authToken = authToken.access_token;
    //         return this.baseBackendRequest(requestType, requestTarget, requestData, useUserToken);
    //       }));
    //   return req;
    // } else {
    //   console.log('In else');
    //   console.log(useUserToken);
    //   return this.baseBackendRequest(requestType, requestTarget, requestData, useUserToken);
    // }
    return this.baseBackendRequest(requestType, requestTarget, requestData, useUserToken);
  }

  private baseBackendRequest(requestType, requestTarget, requestData?, useUserToken?): Observable<any> {
    if (requestType === 'post') {
      return this.http.post(
        environment.apiUrl + requestTarget,
        requestData,
        { headers: this.getContentHeaders(useUserToken) }
      );
    } else if (requestType === 'get') {
      console.log(environment.apiUrl);
      console.log(requestTarget);
      return this.http.get(
        environment.apiUrl + requestTarget,
        { headers: this.getContentHeaders(useUserToken), params: requestData, observe: 'response'}
      );
    }
  }

  getClientAccessToken(): Observable<any> {
    const idsCredentials = environment.identityServerClientCredentials;
    const body = new FormData();
    body.append('client_id', idsCredentials.client_id);
    body.append('client_secret', idsCredentials.client_secret);
    body.append('scope', idsCredentials.scope);
    body.append('grant_type', idsCredentials.grant_type);

    const headers: HttpHeaders = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(
      environment.idsUrl + 'connect/token',
      body,
      { headers: new HttpHeaders() }
    );
  }

  getUserAccessToken(email, password): Observable<any> {
    const idsCredentials = environment.identityServerUserCredentials;
    const body = new FormData();
    body.append('client_id', idsCredentials.client_id);
    body.append('client_secret', idsCredentials.client_secret);
    body.append('scope', idsCredentials.scope);
    body.append('grant_type', idsCredentials.grant_type);
    body.append('username', email);
    body.append('password', password);

    return this.http.post(
      environment.idsUrl + 'connect/token',
      body,
      { headers: new HttpHeaders() }
    );
  }

  getContentHeaders(useUserToken?: any): HttpHeaders {
    let contentHeaders = new HttpHeaders();
    let authToken = this.authservice.pickAuthenticationToken();
    if (useUserToken) { authToken = this.authservice.userToken; }
    contentHeaders = contentHeaders.set('Authorization', `Bearer ${authToken}`);
    console.log(authToken);
    return contentHeaders;
  }

}
