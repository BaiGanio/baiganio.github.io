import { Component, OnInit } from "@angular/core";
import { AuthService } from "./@services/auth.service";
import { BackendService } from "./@services/backend.service";
import { ErrorHandlerService } from "./@services/error-handler.service";
import { SignalRService } from "./@services/signalR.service";

@Component({
  selector: "app-root",
  template: `
    <app-navbar></app-navbar>
  `,
})
export class AppComponent implements OnInit {
  title = "BaiGanio";
  constructor(
    private backendService: BackendService,
    private authService: AuthService,
    private signalRService: SignalRService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.backendService.getClientAccessToken().subscribe(
      (response) => {
        this.authService.authToken = response.access_token;
        //this.signalRService.initializeSignalRConnection();
      },
      (error) => {
        //console.log(error.error);
        //this.errorHandlerService.handleRequestError(error);
      },
    );
  }
}
