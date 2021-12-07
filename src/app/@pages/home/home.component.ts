
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:
  `
  <div style="text-align:center">
    <div class="content">
    <h1 class="title">Welcome to Bai Ganio</h1>
      <div class="row">
        <div class="col-md-5 col-center">
          <img src="./assets/images/app/Ganio.jpg" alt="">
        </div>
        <div class="col-md-7 col-center">
          <h1 class="comingSoon">Bai Ganio is a fictional character & protagonist in a series of satirical
          feuilletons from Bulgarian writer, lawyer and public man Aleko Konstantinov.
          </h1>
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
