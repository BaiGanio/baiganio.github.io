import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
standalone: true,
  imports: [
    RouterLink,      // 3. Add to imports
    MatButtonModule  // 4. Add to imports
  ],
   template:
  `
  <div class="content">
    <div class="row">
      <div class="col-xs col-center text-center">
        <!-- <h1 class="Guildof">File not found</h1> -->
        <img src="images/404.ico"  alt="Picture from my collection." />
        <h1 class="title">
          Ooops...
          <span id="errorMessage">
          Page not found on the Server!
          </span>
        </h1>
        <button
          mat-raised-button
          routerLink="/home">
          Back To Home
        </button>
      </div>
    </div>
  </div>
  `,
  styleUrl: './not-found.component.scss',
})

export class NotFoundComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
