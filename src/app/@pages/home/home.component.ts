
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:
  `
  <div style="text-align:center">
    <div class="content">
      <div class="row">
        <div class="col-xs-12 col-center">
            <h1>
              Welcome to BaiGanio
            </h1>
            <img src="./assets/images/app/Ganio.jpg" alt="">
            <h1 id="comingSoon">coming soon...</h1>
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