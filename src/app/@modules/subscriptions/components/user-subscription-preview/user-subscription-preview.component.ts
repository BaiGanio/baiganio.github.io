import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-subscription-preview',
  template: 
  `
    <div class="container">
      <img src="{{ subscription?.imgUrl}}" class="img-thumbnail img-fluid">
      <br>
      <br>
      <h2 class="card-title text-center"  style="font-family: 'Alsandra';">Type: {{subscription?.type}}</h2>
      <hr>
      <h5>Is Active: {{ subscription?.isActive }}</h5>
      <hr>
      <h5>Status: {{ subscription?.status }}</h5>
      <hr>
      <h5> Created On : {{subscription?.createdOn | date : 'dd-MMM-yyyy HH:MM:ss'}}</h5>
      <hr>
      <h5> Modified On : {{subscription?.modifiedOn | date : 'dd-MMM-yyyy HH:MM:ss'}}</h5>
      <hr>
    </div>
  `,
  styleUrls: ['./user-subscription-preview.component.scss']
})
export class UserSubscriptionPreviewComponent implements OnInit {
  @Input('subscription')
  subscription: any;
  constructor() { }

  ngOnInit(): void {
  }

}
