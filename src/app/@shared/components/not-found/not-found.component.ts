import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template:
  `
  <div class="content">
    <div class="row">
      <div class="col-xs col-center text-center">
        <!-- <h1 class="Guildof">File not found</h1> -->
        <img id="not-founded" src="../assets/images/status-codes/404.ico"  alt="Picture from my collection." />
        <h1>
          Oops... Server says: <br>
          <span id="errorMessage">
            'The page doesn't exist'!
          </span>
        </h1>
        <button routerLink='/home' class="btn">
          Back To Home
        </button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
