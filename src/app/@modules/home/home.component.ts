import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TermsComponent } from 'src/app/@shared/components/terms/terms.component';

@Component({
  selector: 'app-home',
  template:
  `
  <div style="text-align:center">
    <div class="content">
      <div class="row">
        <div class="col-xs-12 col-center">
            <h1 class="GotHeroin">
              Welcome to BaiGanio CI/CD
            </h1>
            <img src="./assets/images/Ganio.jpg" alt="">
            <h1 id="comingSoon">coming soon...</h1>
        </div>
      </div>
    </div>
  </div>
  <ngx-loading [show]="loading" [config]="{ backdropBorderRadius: '14px', fullScreenBackdrop: true }"></ngx-loading>

  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  constructor() { }

  ngOnInit() {
    // this.loading = false;
  }
}
