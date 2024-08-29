import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { StudentService } from 'src/app/@services/student.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
@Component({
  selector: 'app-polararea',
  templateUrl: './polararea.component.html'
})
export class PolarareaComponent implements OnInit {
  url = environment.apiUrl + 'fake/Chart/';
  data: any;
  Player = [];
  Run = [];
  polarareachart: any;
    constructor(
      private httpClient: HttpClient,
      private studentService: StudentService,
      private errorHandlerService: ErrorHandlerService) { }

    ngOnInit() {
      // this.studentService.getChartData().subscribe(
      //   response => {
      //     response.body.forEach(x => {
      //       this.Player.push(x.playerName);
      //       this.Run.push(x.run);
      //     });
      //   },
      //   err => {
      //     this.errorHandlerService.handleRequestError(err);
      //   },
      //   () => {
      //     this.initializePolar();
      //   }
      // );
      // this.httpClient.get(this.url).subscribe((result: any) => {
      //   result.forEach(x => {
      //     this.Player.push(x.playerName);
      //     this.Run.push(x.run);
      //   });
      //  this.initializePolar();
      // });
    }

    // private initializePolar() {
    //   this.polarareachart = new Chart('canvas', {
    //     type: 'polarArea',
    //     data: {
    //       labels: this.Player,

    //       datasets: [
    //         {
    //           data: this.Run,
    //           borderColor: '#3cb371',
    //           backgroundColor: [
    //             '#3cb371',
    //             '#0000FF',
    //             '#9966FF',
    //             '#4C4CFF',
    //             '#00FFFF',
    //             '#f990a7',
    //             '#aad2ed',
    //             '#FF00FF',
    //             'Blue',
    //             'Red',
    //             'Blue'
    //           ],
    //         }
    //       ],
    //     },
    //     options: {
    //       legend: {
    //         display: false
    //       },
    //       scales: {
    //         xAxes: [{
    //           display: false
    //         }],
    //         yAxes: [{
    //           display: true
    //         }],
    //       }
    //     }
    //   });
    // }
}

