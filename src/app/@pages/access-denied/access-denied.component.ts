import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-denied',
  template:
  `
  <div class="content">
    <div class="row">
      <div class="col-xs-12 col-center text-center">
        <img id="denied" src="../assets/images/status-codes/403.png"  alt="Picture from my collection." />
        <h1> Status code: <span>403 - FORBIDDEN!  </span>
          <br> Server says: <span>'You are not authorized!'  </span>
        
        </h1>
        <button mat-button color="primary" routerLink='/home'> Back To Home</button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
