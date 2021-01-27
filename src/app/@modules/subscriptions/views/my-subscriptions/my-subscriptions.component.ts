import { Component, OnInit } from '@angular/core';
import { SubscriptionPreviewModel } from '../../models/subscription-preview-model.module';
import { StudentPreviewModel } from 'src/app/@modules/students/models/student-preview-model.module';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { SubscriptionService } from 'src/app/@services/subscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-subscriptions',
  templateUrl: './my-subscriptions.component.html',
  styleUrls: ['./my-subscriptions.component.scss']
})
export class MySubscriptionsComponent implements OnInit {
  subscriptions: any;
  student: StudentPreviewModel;
  userId = '';
  errorMsg = '';
  loading = false;
  totalUsersInSubscr = 0;
  isUserSubscribed = false;
  activeTab = 1;


  constructor(
      private errorHandlerService: ErrorHandlerService,
      private subscriptionService: SubscriptionService,
      private router: Router,
  ) { }

  ngOnInit() {
    this.getUserSubscriptions();
    // this.getStudent();
  }

  onRejectClick() {
  }

  getSubscription() {
      this.router.navigate(['/subscriptions']);
  }

  private getUserSubscriptions() {
    this.subscriptionService.getUserActiveSubscriptions()
        .subscribe(
            response => {
                this.subscriptions = response.body;
                //console.log(this.subscriptions);
            },
            error => {
                this.errorHandlerService.handleRequestError(error);
            },
            () => {
                this.loading = false;
            }
        );
  }

  getUserSubscription(sId: string): any {
    for (let subscription of this.subscriptions) {
        if(subscription.id === sId){
            return subscription;
        }
    }
  }

  getUserSubscriptionByType(type): any {
    for (let subscription of this.subscriptions) {
        if(subscription.type === type){
            return subscription;
        }
    }
  }

}
