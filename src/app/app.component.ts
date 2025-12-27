import { Component } from '@angular/core';
import { NavbarComponent } from "./@modules/navbar/navbar.component"; //

@Component({
    selector: 'app-root',
    standalone: true,
    template: `<app-navbar></app-navbar>`,
    imports: [NavbarComponent]
})
export class AppComponent {
   title = "BaiGanio";
  constructor(
    // private backendService: BackendService,
    // private authService: AuthService,
    // private signalRService: SignalRService,
    // private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit() {
    // this.backendService.getClientAccessToken().subscribe(
    //   (response) => {
    //     this.authService.authToken = response.access_token;
    //     //this.signalRService.initializeSignalRConnection();
    //   },
    //   (error) => {
    //     //console.log(error.error);
    //     //this.errorHandlerService.handleRequestError(error);
    //   },
    // );
  }
}
