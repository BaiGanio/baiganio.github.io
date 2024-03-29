import { Component, OnInit, DoCheck, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SubscriptionPreviewModel } from './models/subscription-preview-model.module';
import { SubscriptionService } from 'src/app/@services/subscription.service';
import { UserDataService } from 'src/app/@services/user-data.service';
import { AuthService } from 'src/app/@services/auth.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubscriptionPreviewComponent } from './components/subscription-preview/subscription-preview.component';
import { UserView } from '../users/models/user-view';

@Component({
    selector: 'app-subscriptions',
    templateUrl: 'subscriptions.component.html',
    styleUrls: ['subscriptions.component.scss']
})

export class SubscriptionsComponent implements OnInit {

    loading = false;
    subscriptions = new Array<SubscriptionPreviewModel>();
    userId = '';
    errorMsg = '';
    subscriptionId = '';
    shouldLog = false;
    successfulConfirmation = false;
    failedConfirmation = false;
    notificationRequest = false;
    panelOpenState = false;
    isUserConfirmingSubscription = false;
    totalUsersInSubscr = 0;
    storedUser: any;
    haveConfirmedSubscription = false;
    isInitMsg = true;

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
        // if (this.route.snapshot.params.token) {
        //     this.checkRouteParameters();
        // }
        // if (this.authService.isAuthenticated() && this.storedUser === undefined) {
        //     this.storedUserInit();
        // }
        this.subscriptionsInit();
    }

    private subscriptionsInit() {
        this.subscriptionsService.getAllSubscriptions().subscribe({
            next: (response) => {
                response.forEach(element => {
                    const s = {
                        Id: element.id,
                        Type: element.type,
                        Description: element.description,
                        IsActive: element.isActive,
                        Image: element.imgUrl,
                        TotalSubscribers: element.totalSubscribers,
                        ConfirmedSubscribers: element.confirmedSubscribers,
                        PendingSubscribers: element.pendingSubscribers,
                        CancelledSubscribers: element.cancelledSubscribers,
                        CreatedOn: element.createdOn,
                        ModifiedOn: element.modifiedOn
                    };
                    this.subscriptions.push(s as SubscriptionPreviewModel);
                });
            }, 
            error: (error) => {
                this.errorHandlerService.handleRequestError(error);
                this.loading = false;
            }, 
            complete: () => { this.loading = false; this.isInitMsg = false;}
        });
    }

    private storedUserInit() {
        this.userDataService.getUserByToken().subscribe(
            response => {
                const u = {
                    Id: response.Id,
                    Subscriptions: response.Subscriptions,
                    Roles: response.Roles
                };
                this.storedUser = u as UserView;
                this.userDataService.setUserData(this.storedUser);
            },
            error => {
             this.errorHandlerService.handleRequestError(error);
            }
        );
    }

    goToMySubscriptions() {
        this.router.navigate(['/subscriptions/preview']);
    }

    sendRequest(id: string) {
        this.loading = true;
        if (!this.authService.isAuthenticated()) {
            this.shouldLog = true;
            this.loading = false;
        } else {
            this.subscriptionsService.sendRequestForSub({ Id: id })
                .subscribe(
                    response => {
                        this.notificationRequest = true;
                    },
                    error => {
                        this.loading = false;
                        this.errorHandlerService.handleRequestError(error);
                    },
                    () => {
                        this.loading = false;
                        this.subscriptions = new Array<any>();
                        this.storedUserInit();
                        this.subscriptionsInit();
                    }
                );
        }
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
        let subs = this.storedUser?.Subscriptions;
        if(subs){
            subs.forEach(element => {
                if(element.id === sId && element.status === "Confirmed"){
                    result =  true;
                }
            });
        }
        return result;
    }

    isWaitingForConfirmation(sId: string): boolean {
        let result = false;
        let subs = this.storedUser?.Subscriptions;
        if(subs){
            subs.forEach(element => {
                if(element.id === sId && element.status === "WaitingForConfirmation"){
                    result = true;
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

    showRequest(sId: string) : boolean{
        let result = true;
        let subs = this.storedUser?.Subscriptions;
        if(subs){
            subs.forEach(element => {
                if(element.id === sId && element.status === "WaitingForConfirmation"){
                    result = false;
                }else if(element.id === sId && element.status === "Confirmed"){
                    result = false;
                }
            });
        }
        return result;
    }

    showPreview(sId: string) : boolean{
        let result = false;
        let subs = this.storedUser?.Subscriptions;
        if(subs){
            subs.forEach(element => {
                if(element.id === sId && element.status === "WaitingForConfirmation"){
                    result = true;
                } else if(element.id === sId && element.status === "Confirmed"){
                    result = true;
                }
            });
        }
        return result;
    }

    dismiss() {
        this.isUserConfirmingSubscription = false;
        this.notificationRequest = false;
        this.shouldLog = false;
    }
}
