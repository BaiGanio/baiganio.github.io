import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-alert',
  template:
  `
  <div class="content text-center">
    <div class="row">
      <div class="col-xs-12 col-center">    
        <br>
        <h1>
          Ooops... ERROR 503!
          <hr>
          <br>
          <span id="errorMessage">Our Servers are temporary unavailable!</span> 
        </h1>
        <br>
        <button  
          mat-raised-button
          color="primary" 
          routerLink='/home'> 
            Back To Home
        </button>
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
