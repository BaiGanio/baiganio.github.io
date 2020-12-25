
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:
  `
  <div style="text-align:center">
    <div class="content">
      <div class="row">
        <div class="col-xs-12 col-center">
            <h1 class="title">
              Welcome to BaiGanio
            </h1>
            <img src="./assets/images/app/Ganio.jpg" alt="">
            <h1 class="title" id="comingSoon">Open doors on 01 April 2021 </h1>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  constructor() { }

  ngOnInit() {
    this.loading = true;
  }
}