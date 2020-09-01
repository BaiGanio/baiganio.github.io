import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template:
  `
  <div class="content">
    <div class="row">
        <div class="col-xs-12 col-center text-center">
            <hr>
            <h1>
                We are happy to see you on board! 
                <img class="myImg" src="../assets/images/bd2.gif"  alt=""/>
            </h1>
            <hr>
            <h1>
                Please check your email for confirmation link!
            </h1>
            <br>
            <button routerLink='/home' class="btn">
              Back To Home
            </button>
        </div>
    </div>
  </div>
  `,
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
