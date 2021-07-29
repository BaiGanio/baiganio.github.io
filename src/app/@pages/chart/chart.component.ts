import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignalRService } from 'src/app/@services/signalR.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public chartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public chartLabels: string[] = ['Real time data for the chart'];
  public chartType: string = 'bar';
  public chartLegend: boolean = true;
  public colors: any[] = [{ backgroundColor: '#5491DA' }, { backgroundColor: '#E74C3C' }, { backgroundColor: '#82E0AA' }, { backgroundColor: '#E5E7E9' }]


  constructor(public signalRService: SignalRService, private http: HttpClient) { }

  ngOnInit() {
    this.signalRService.startChartHubConnection();
    this.signalRService.addTransferChartDataListener();
    // this.signalRService.addBroadcastChartDataListener();
    this.startHttpRequest();
  }
  private startHttpRequest = () => {
    this.http.get('https://localhost:44364/api/chart')
      .subscribe(res => {
        console.log(res);
      })
  }

  public chartClicked = (event) => {
    console.log(event);
    this.signalRService.broadcastChartData();
  }
}
