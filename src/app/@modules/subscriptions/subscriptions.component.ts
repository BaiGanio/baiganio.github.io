import { Component, OnInit, DoCheck, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SubscriptionPreviewModel } from './models/subscription-preview-model.module';
import { SubscriptionService } from 'src/app/@services/subscription.service';
import { UserDataService } from 'src/app/@services/user-data.service';
import { AuthService } from 'src/app/@services/auth.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SubscriptionPreviewComponent } from './components/subscription-preview/subscription-preview.component';
import { UserViewModel } from '../users/models/user-view-model.module';

@Component({
    selector: 'app-subscriptions',
    templateUrl: 'subscriptions.component.html',
    styleUrls: ['subscriptions.component.scss']
})

export class SubscriptionsComponent implements OnInit {
    subscriptions = new Array<SubscriptionPreviewModel>();
    userId = '';
    errorMsg = '';
    subscriptionId = '';
    successfulConfirmation = false;
    failedConfirmation = false;
    notificationRequest = false;
    loading = false;
    panelOpenState = false;
    isUserConfirmingSubscription = false;
    totalUsersInSubscr = 0;
    storedUser: any;
    haveConfirmedSubscription = false;

    constructor(
        private errorHandlerService: ErrorHandlerService,
        private authService: AuthService,
        private router: Router,
        private subscriptionsService: SubscriptionService,
        private userDataService: UserDataService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private snackbar: MatSnackBar
    ) {}

    ngOnInit() {
        this.loading = true;
        if (this.route.snapshot.params.token) {
            this.checkRouteParameters();
        }
        if (this.authService.isAuthenticated()) {
            this.loading = true;
            this.storedUser = this.userDataService.getUserData();
            if (this.storedUser.id === undefined) {
                this.storedUserInit();
            }
        }
        this.subscriptionsInit();
    }

    private subscriptionsInit() {
        this.subscriptionsService.getAllSubscriptions().subscribe(response => {
            console.log(response.body);
            response.body.forEach(element => {
                const s = {
                    Id: element.id,
                    Type: element.type,
                    Description: element.description,
                    IsActive: element.isActive,
                    Image: element.image,
                    TotalSubscribers: element.totalSubscribers,
                    ConfirmedSubscribers: element.confirmedSubscribers,
                    PendingSubscribers: element.pendingSubscribers,
                    CancelledSubscribers: element.cancelledSubscribers,
                    CreatedOn: element.createdOn,
                    ModifiedOn: element.modifiedOn
                };
                this.subscriptions.push(s as SubscriptionPreviewModel);
            });
        }, error => {
            this.errorHandlerService.handleRequestError(error);
            this.loading = false;
        }, () => { this.loading = false; });
    }

    private storedUserInit() {
        this.userDataService.getUserByToken().subscribe(
            response => {
                const u = {
                    Id: response.body.id,
                    Username: response.body.username,
                    Subscriptions: response.body.subscriptions,
                    Roles: response.body.roles
                };
                this.storedUser = u as UserViewModel;
                this.userDataService.setUserData(this.storedUser);
            },
            error => {
                this.errorHandlerService.handleRequestError('myahah' + error);
            }, () => { this.loading = false; }
        );
    }

    goToMySubscriptions() {
        this.router.navigate(['/subscriptions/preview']);
    }

    sendRequest(id: string) {
        this.loading = true;
        console.log(id);
        this.subscriptionsService.sendRequestForSub({ Id: id })
            .subscribe(
                response => {
                    this.loading = false;
                    this.notificationRequest = true;
                },
                error => {
                    this.loading = false;
                    this.errorHandlerService.handleRequestError(error);
                },
                () => {
                    this.subscriptions = new Array<any>();
                    this.storedUserInit();
                    this.subscriptionsInit();
                }
            );
    }

    private checkRouteParameters(): void {
        const token = (String)(this.route.snapshot.params.token).split('--');
        if (token) {
            this.confirmSubscription();
        }
    }

    private confirmSubscription() {
        const token = this.route.snapshot.params.token;
        this.subscriptionsService.confirmRequestForSub(token).subscribe(
            () => {
                this.isUserConfirmingSubscription = true;
                this.loading = false;
            },
            err => {
                this.loading = false;
                this.failedConfirmation = true;
                this.errorHandlerService.handleRequestError(err);
            }
        );
    }

    getSubscriptionPreview(subscriptionId: string) {
        let subscription: SubscriptionPreviewModel;
        this.subscriptions.forEach((element) => {
            if (element.Id === subscriptionId) {
                subscription =
                    new SubscriptionPreviewModel(
                        element.Id,
                        element.Type,
                        element.Description,
                        element.IsActive,
                        element.Image,
                        element.TotalSubscribers,
                        element.ConfirmedSubscribers,
                        element.PendingSubscribers,
                        element.CancelledSubscribers,
                        element.CreatedOn,
                        element.ModifiedOn
                    );
            }
        });
        const $dialogRef =
            this.dialog.open(
                SubscriptionPreviewComponent,
                { data: { model: subscription } }
            );
        $dialogRef.afterClosed().subscribe();
    }

    isConfirmed(sId: string): boolean {
        let result = false;
        this.storedUser = this.userDataService.getUserData();
        if (this.storedUser.Id) {
            this.storedUser.Subscriptions.forEach(element => {
                if (sId === element.subscription_id && element.status === 'Confirmed') {
                    this.haveConfirmedSubscription = true;
                    result = true;
                    return true;
                }
            });
        }
        return result;
    }

    isWaitingForConfirmation(sId: string): boolean {
        let result = false;
        this.storedUser = this.userDataService.getUserData();
        if (this.storedUser.Id) {
            this.storedUser.Subscriptions.forEach(element => {
                if (sId === element.subscription_id && element.status === 'WaitingForConfirmation') {
                    result = true;
                    return true;
                }
            });
        }
        return result;
    }

    getTotalSubscribers(sId: string): number {
        let result = 0;
        this.subscriptions.forEach(element => {
            if (sId === element.Id) {
                result =  element.TotalSubscribers;
                return result;
            }
        });
        return result;
    }

    dismiss() {
        this.isUserConfirmingSubscription = false;
        this.notificationRequest = false;
    }
}
