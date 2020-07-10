import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-denied',
  template:
  `
  <div class="content">
    <div class="row">
      <div class="col-xs-12 col-center text-center">
        <img id="denied" src="../assets/images/status-codes/403.png"  alt="Picture from my collection." />
        <h1>
          Oops... Error!
          <br> Status code: 403 - FORBIDDEN!
          <br> Server says:
          <br> 'You are not authorized!'.
        </h1>
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
