
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html'
})
export class LinechartComponent implements OnInit {

  url = 'https://localhost:44364/api/fake/Chart/';
  data: any;
  Player = [];
  Run = [];
  Linechart: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((result: any) => {
      result.forEach(x => {
        this.Player.push(x.playerName);
        this.Run.push(x.run);
      });
      this.Linechart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.Player,

          datasets: [
            {
              data: this.Run,
              borderColor: '#3cb371',
              backgroundColor: '#0000FF',
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}
