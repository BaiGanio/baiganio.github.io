import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
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
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.bgapiSignalRNotyfyHub)
      .build() ;

    connection.start()
      .then(
        () => {
          this.snackbar.open(
            `Connected to ${environment.bgapiSignalRNotyfyHub} SignalR hub!`,
            '',
            {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: 'successSnackbar'
            }
          );
        },
        err => {
          this.errorHandlerService.handleRequestError(err);
        }
      );

    connection.on('BroadcastPostmanMessage', (type: string, payload: string) => {
      this.snackbar.open(
        `Demo SignalR service via Postman!!! Type of message: ${type} with payload: ${payload}`,
        'X',
        {
          duration: 6000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'successSnackbar'
        }
      );
      console.log({ severity: type, summary: payload, detail: 'Via SignalR service' });
    });
  }
}
