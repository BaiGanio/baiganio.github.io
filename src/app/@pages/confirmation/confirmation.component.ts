import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { AccountService } from 'src/app/@services/account.service';

const visibleButtons = {
    logo: true
};

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
    errorMessage = '';
    successMessage = '';
    isEmailConfirmed = false;
    enableLogin = false;
    loading = false;
    state;
    redirectURI;
    retryFunction = null;
    userId;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private errorHandlerService: ErrorHandlerService
    ) { }

    ngOnInit() {
        this.checkRouteParameters();
    }

    checkRouteParameters(): void {
        this.errorMessage
        const token = this.route.snapshot.params.token;
        const change = this.route.snapshot.params.changeid;
        // this.state = this.route.snapshot.queryParams.state;
        // this.redirectURI = this.route.snapshot.queryParams.redirect_uri;
        if (token) {
            this.accountService.confirm(token)
                .subscribe(
                    response => {
                        this.userId = response;
                        this.successMessage = 'Welcome to BaiGanio community!';
                        this.isEmailConfirmed = true;
                        this.enableLogin = true;
                    },
                    error => {
                        console.log(error);
                        this.errorHandlerService.handleRequestError(error);
                        this.errorMessage = 'Looks like there is a problem with the link?!?!?'
                    }
                );
        } else if (change) {
            // this.backendService.revertUserChange(change)
            // 	.subscribe(
            // 	response => {
            // 		this.successMessage = this.locale.confirmRevertChangesSuccess;
            // 	},
            // 	error => this.errorHandlerService.handleRequestError(error, this.handleError, [this], null, this.retryFunction));
        } else {
            // this.errorMessage = this.locale.confirmInvalidLink;
        }
    }

    goToLogin(): void {
        if (this.redirectURI) {
            console.log(this.redirectURI + '----' + this.state);
            this.router.navigate(['/login'], { queryParams: { redirect_uri: this.redirectURI, state: this.state } });
        } else {
            console.log('nothing... navigating to login from confirm');
            this.router.navigate(['/login']);
        }
    }
}
