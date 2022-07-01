import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogger-subscription-details',
  templateUrl: './blogger-subscription-details.component.html',
  styleUrls: ['./blogger-subscription-details.component.scss']
})
export class BloggerSubscriptionDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { console.log('Lifecycle methods should not be empty');
  }

}
