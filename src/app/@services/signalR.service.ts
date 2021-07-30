import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { ErrorHandlerService } from './error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { ChartModel } from '../@shared/models/chartmodel.model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private chartHubConnection: signalR.HubConnection
  public data: ChartModel[];
  public bradcastedData: ChartModel[];
  private chartHubConnectionId: any;

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private snackbar: MatSnackBar) { }


    public startChartHubConnection = () => {
      this.chartHubConnection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Information)
        .withUrl(environment.bgapiSignalRChartHub)
        .build();

      this.chartHubConnection
        .start()
        .then(() => {
          this.chartHubConnectionId = this.chartHubConnection.connectionId;
          console.log('Started chartHubConnection with connection id: ' + this.chartHubConnectionId)
        })
        .catch(err => console.log('Error while starting chartHubConnection: ' + err))
    }

    public stopChartHubConnection = () => {

      this.chartHubConnection

        .stop()
        .then(() => console.log('Stopped chartHubConnection with connection id: ' + this.chartHubConnectionId))
        .catch(err => console.log('Error while stopping chartHubConnection: ' + err));

        this.chartHubConnection = null;
    }

  initializeSignalRConnection() {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.bgapiSignalRNotyfyHub)
      .build();

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

  public addTransferChartDataListener = () => {
    this.chartHubConnection.on('transferchartdata', (data) => {
      this.data = data;
      console.log('Called broadcastChartData with data: ' + data);
    });
  }

  public broadcastChartData = () => {
    this.chartHubConnection.invoke('broadcastchartdata', this.data).then(() => 'Invoked broadcastChartData with data: ' + this.data)
    .catch(err => console.error(err));
  }

  public addBroadcastChartDataListener = () => {
    this.chartHubConnection.on('broadcastchartdata', (data) => {
      this.bradcastedData = data;
    })
  }
}
