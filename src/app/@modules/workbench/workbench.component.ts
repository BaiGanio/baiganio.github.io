import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss']
})
export class WorkbenchComponent implements OnInit {
  selectedTab: any;
  title = 'app';
  host = '/tabs';

  constructor(private store: Store, public router: Router) {
    //this.selectedTab = this.store.select(state => state.selectedTab);
    this.host = router.url;
}
  ngOnInit(): void {
  }

  onChangeTab(event) {
    //this.store.dispatch(new SelectedTabChangedAction(event));
}

}
