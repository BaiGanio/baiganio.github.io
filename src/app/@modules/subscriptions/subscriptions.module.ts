import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { SubscriptionPreviewComponent } from './components/subscription-preview/subscription-preview.component';
import { MySubscriptionsComponent } from './views/my-subscriptions/my-subscriptions.component';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions.component';
import { UserSubscriptionPreviewComponent } from './components/user-subscription-preview/user-subscription-preview.component';
import { UserSubscriptionEditComponent } from './components/user-subscription-edit/user-subscription-edit.component';

import { BloggerSubscriptionPreviewComponent } from './components/blogger-subscription-preview/blogger-subscription-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BloggerSubscriptionDetailsComponent } from './components/blogger-subscription-details/blogger-subscription-details.component';
@NgModule({
    declarations: [
        SubscriptionsComponent,
        SubscriptionPreviewComponent,
        MySubscriptionsComponent,
        UserSubscriptionPreviewComponent,
        UserSubscriptionEditComponent,
        BloggerSubscriptionPreviewComponent,
        BloggerSubscriptionDetailsComponent
    ],
    imports: [
        CommonModule,
        SubscriptionsRoutingModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SubscriptionsModule { }
