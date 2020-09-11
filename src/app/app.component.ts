import { Component, OnInit } from '@angular/core';
import { BackendService } from './@services/backend.service';
import { AuthService } from './@services/auth.service';
import { SignalRService } from './@services/signalR.service';
import { ErrorHandlerService } from './@services/error-handler.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <cookie-law></cookie-law>
  `
})
export class AppComponent implements OnInit {
  title = 'app';
  authToken: any;

  constructor(
    private backendService: BackendService,
    private authService: AuthService,
    private signalRService: SignalRService,
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.backendService.getClientAccessToken()
      .subscribe(
        response => {
          this.authService.authToken = response.access_token;
        },
         error => { this.errorHandlerService.handleRequestError(error); },
        () => {
         // this.initializeSignalR();
        }
      );
  }

// initializeSignalR(); {
//     this.signalRService.initializeSignalRConnection();
//   }

}
