// import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-polararea',
//   templateUrl: './polararea.component.html'
// })
// export class PolarareaComponent implements OnInit {
//   url = 'https://localhost:44344/api/fake/Chart/';
//   data: any;
//   Player = [];
//   Run = [];
//   polarareachart: any;
//     constructor(private httpClient: HttpClient) { }

//     ngOnInit() {
//       this.httpClient.get(this.url).subscribe((result: any) => {
//         result.forEach(x => {
//           this.Player.push(x.playerName);
//           this.Run.push(x.run);
//         });
//         this.polarareachart = new Chart('canvas', {
//           type: 'polarArea',
//           data: {
//             labels: this.Player,

//             datasets: [
//               {
//                 data: this.Run,
//                 borderColor: '#3cb371',
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
//               }
//             ],
//           },
//           options: {
//             legend: {
//               display: false
//             },
//             scales: {
//               xAxes: [{
//                 display: false
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
