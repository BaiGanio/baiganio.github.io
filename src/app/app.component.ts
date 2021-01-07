import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthService } from "./@services/auth.service";
import { BackendService } from "./@services/backend.service";
import { ErrorHandlerService } from "./@services/error-handler.service";
import { SignalRService } from "./@services/signalR.service";

@Component({
  selector: "app-root",
  template: `
    <h1>{{ ops }}</h1>
    <app-navbar></app-navbar>
  `,
})
export class AppComponent {
  title = "BaiGanio";
  authToken: any;
  ops = environment.identityServerClientCredentials.client_id || "no no no";
  constructor(
    private backendService: BackendService,
    private authService: AuthService,
    private signalRService: SignalRService,
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.backendService.getClientAccessToken().subscribe(
      (response) => {
        this.authService.authToken = response.access_token;
      },
      (error) => {
        this.errorHandlerService.handleRequestError(error);
      },
      () => {
        // this.initializeSignalR();
      }
    );
  }

  // initializeSignalR(); {
  //     this.signalRService.initializeSignalRConnection();
  //   }
}
