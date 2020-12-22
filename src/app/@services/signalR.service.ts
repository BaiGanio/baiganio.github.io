import { Injectable } from '@angular/core';
// import * as signalR from '@aspnet/signalr';
import { ErrorHandlerService } from './error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private snackbar: MatSnackBar) { }

  initializeSignalRConnection() {
    // const connection = new signalR.HubConnectionBuilder()
    //   .configureLogging(signalR.LogLevel.Information)
    //   .withUrl(environment.bgapiSignalRNotyfyHub)
    //   .build() ;

    // connection.start()
    //   .then(
    //     () => {
    //       this.snackbar.open(
    //         `Connected to ${environment.bgapiSignalRNotyfyHub} SignalR hub!`,
    //         'X',
    //         {
    //           duration: 3000,
    //           horizontalPosition: 'center',
    //           verticalPosition: 'top',
    //           panelClass: 'successSnackbar'
    //         }
    //       );
    //       // console.log('Connected to https://localhost:44344/notify SignalR hub!');
    //     },
    //     err => {
    //       console.log(err.toString());
    //       // this.errorHandlerService.handleRequestError(err);
    //     }
    //   );

    // connection.on('BroadcastPostmanMessage', (type: string, payload: string) => {
    //   this.snackbar.open(
    //     `@nickname: ${type} -> ${payload} - via SignalR service!`,
    //     'X',
    //     {
    //       duration: 6000,
    //       horizontalPosition: 'center',
    //       verticalPosition: 'top',
    //       panelClass: 'successSnackbar'
    //     }
    //   );
    //   // console.log({ severity: type, summary: payload, detail: 'Via SignalR service' });
    // });
  }
}
