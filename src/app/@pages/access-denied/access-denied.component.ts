import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-denied',
  styleUrls: ['./access-denied.component.scss'],
  template:
  `
  <div class="content text-center">
    <div class="row">
      <div class="col-xs-12 col-center">
        <br>
        <h1>Ooops...</h1>
        <h1><span>FORBIDDEN!</span>
          <br> Server says: <span>"You are not authorized!"</span>
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
})
export class AccessDeniedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
