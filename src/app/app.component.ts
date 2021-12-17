import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserView } from "./@modules/users/models/user-view";
import { AuthService } from "./@services/auth.service";
import { BackendService } from "./@services/backend.service";
import { ErrorHandlerService } from "./@services/error-handler.service";
import { SignalRService } from "./@services/signalR.service";
import { AppState } from "./@store/app.state";

@Component({
  selector: "app-root",
  template: `
    <app-navbar></app-navbar>
  `,
})
export class AppComponent {
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
