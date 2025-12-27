import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'; //

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule],
  template: `<button matButton="elevated">Click Me</button>`
})
export class AppComponent {
  title = 'baiganio.github.io';
}
