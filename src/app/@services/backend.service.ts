import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient, private authservice: AuthService) { }

  backendRequest(requestType, requestTarget, requestData?, useUserToken?): Observable<any> {
    if (!this.authservice.authToken) {
      const req = this.getClientAccessToken()
        .pipe(flatMap(
          (response) => {
            const authToken = response;
            this.authservice.authToken = authToken.access_token;
            return this.baseBackendRequest(requestType, requestTarget, requestData, useUserToken);
          }));
      return req;
    } else {
      return this.baseBackendRequest(requestType, requestTarget, requestData, useUserToken);
    }
  }

  private baseBackendRequest(requestType, requestTarget, requestData?, useUserToken?): Observable<any> {
    if (requestType === 'post') {
      return this.http.post(
        environment.apiUrl + requestTarget,
        requestData,
        { headers: this.getContentHeaders(useUserToken) }
      );
    } else if (requestType === 'get') {
      return this.http.get(
        environment.apiUrl + requestTarget,
        { headers: this.getContentHeaders(useUserToken), params: requestData, observe: 'response'}
      );
    }
  }

  getClientAccessToken(): Observable<any> {
    const is4credentials = environment.identityServerClientCredentials;
    const headers: HttpHeaders = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/x-www-form-urlencoded');
    // tslint:disable-next-line: max-line-length
    const body = `grant_type=${is4credentials.grant_type}&scope=${is4credentials.scope}&client_secret=${is4credentials.client_secret}&client_id=${is4credentials.client_id}`;

    return this.http.post(
      environment.idsUrl + 'connect/token',
      body,
      { headers }
    );
  }

  getUserAccessToken(email, password): Observable<any> {
    const is4credentials = environment.identityServerUserCredentials;
    // const body = new FormData();
    // body.append('client_id', is4credentials.client_id);
    // body.append('client_secret', is4credentials.client_secret);
    // body.append('scope', is4credentials.scope);
    // body.append('grant_type', is4credentials.grant_type);
    // body.append('username', email);
    // body.append('password', password);

    const headers: HttpHeaders = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/x-www-form-urlencoded');
 // tslint:disable-next-line: max-line-length
    const body = `grant_type=${is4credentials.grant_type}&scope=${is4credentials.scope}&client_secret=${is4credentials.client_secret}&client_id=${is4credentials.client_id}&username=${email}&password=${password}`;

    return this.http.post(
      environment.idsUrl + 'connect/token',
      body,
      { headers }
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
