import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html'
})
export class BarchartComponent implements OnInit {
  url = 'https://localhost:44344/api/fake/Chart/';
  data: any;
  Player = [];
  Run = [];
  barchart: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe((result: any) => {
      result.forEach(x => {
        this.Player.push(x.playerName);
        this.Run.push(x.run);
      });
      this.barchart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.Player,
          datasets: [
            {
              data: this.Run,
              borderColor: '#3cba9f',
              backgroundColor: [
                '#3cb371',
                '#0000FF',
                '#9966FF',
                '#4C4CFF',
                '#00FFFF',
                '#f990a7',
                '#aad2ed',
                '#FF00FF',
                'Blue',
                'Red',
                'Blue'  
              ],
              fill: true
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