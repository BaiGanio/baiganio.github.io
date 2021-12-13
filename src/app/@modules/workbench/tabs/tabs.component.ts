import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  title = 'app';
  host = '/tabs';

  constructor(public router: Router) {
    //this.selectedTab = this.store.select(state => state.selectedTab);
    this.host = router.url;
}

  ngOnInit(): void {
  }

}
