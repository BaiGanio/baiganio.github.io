// import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-piechart',
//   templateUrl: './piechart.component.html'
// })
// export class PiechartComponent implements OnInit {
//   url = 'https://localhost:44344/api/fake/Chart/';
//   data: any;
//   Player = [];
//   Run = [];
//   piechart: any;
//     constructor(private httpClient: HttpClient) { }

//     ngOnInit() {
//       this.httpClient.get(this.url).subscribe((result: any) => {
//         result.forEach(x => {
//           this.Player.push(x.playerName);
//           this.Run.push(x.run);
//         });
//         this.piechart = new Chart('canvas', {
//           type: 'pie',
//           data: {
//             labels: this.Player,
//             datasets: [
//               {
//                 data: this.Run,
//                 borderColor: '#3cba9f',
//                 backgroundColor: [
//                   '#3cb371',
//                   '#0000FF',
//                   '#9966FF',
//                   '#4C4CFF',
//                   '#00FFFF',
//                   '#f990a7',
//                   '#aad2ed',
//                   '#FF00FF',
//                   'Blue',
//                   'Red',
//                   'Blue'
//                 ],
//                 fill: true
//               }
//             ]
//           },
//           options: {
//             legend: {
//               display: true
//             },
//             scales: {
//               xAxes: [{
//                 display: true
//               }],
//               yAxes: [{
//                 display: true
//               }],
//             }
//           }
//         });
//       });
//     }
//   }
