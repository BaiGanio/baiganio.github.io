import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTutorial } from 'src/app/@store/actions/tutorial.actions';
import { AppState } from 'src/app/@store/app.state';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  // constructor(private store: Store<AppState>) { }
  /**
   *
   */
  constructor() {}

  ngOnInit(): void {console.log(' Lifecycle methods should not be empty');
  }

  addTutorial(name, url) {
    //this.store.dispatch(new AddTutorial({name: name, url: url}) )
  }
}
