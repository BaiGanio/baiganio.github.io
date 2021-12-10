import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/app/@shared/models/tutorial.model';
import { AppState } from 'src/app/@store/app.state';
import { RemoveTutorial } from 'src/app/@store/actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit(): void {
  }

  delTutorial(index) {
    this.store.dispatch(new RemoveTutorial(index) )
  }
}
