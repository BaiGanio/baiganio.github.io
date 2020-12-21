import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-alert',
  template:
  `
  <div class="content">
  <div class="row">
    <div class="col-xs-12 col-center text-center">
      <h1>
        Ooops... ERROR 503!
        <br>
        <span id="errorMessage">Our Servers are temporary unavailable!</span> 
        </h1>
        <br>
        <button mat-button color="primary" routerLink='/home'> Back To Home</button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./server-alert.component.scss']
})
export class ServerAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
