import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import * as moment from 'moment';

import {
    // EditUserPropertiesInformationRequestAction,
    // EditUserContactInformationRequestAction,
    // EditUserPersonalInformationRequestAction,
    // EditUserSuccessAction,
    // EditUserFailureAction,
    // EditUserPropertiesMeterInformationRequestAction,
    // EditUserPropertiesQuoteInformationRequestAction,
    // EditUserPropertiesSubscriptionInformationRequestAction,
    UserActionTypes,
    //EditUserJourneyInformationRequestAction,
} from '../actions/user.actions';
import { AppState } from '../app.state';

import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { UserDataService } from 'src/app/@services/user-data.service';

@Injectable()
export class UserEffects {
    constructor(
        private _actions: Actions,
        private _store: Store<AppState>,
        private _userService: UserDataService,
    ) { }

    // @Effect()
    // EditUserPropertyInformation: Observable<Action> = this._actions
    //     .ofType<EditUserPropertiesInformationRequestAction>(UserActionTypes.EDIT_USER_PROPERTY_INFORMATION_REQUEST)
    //     .withLatestFrom(this._store.select(x => x.user.selectedUser))
    //     .map(([action, selectedUser]) => this.editUserPropertyInformation(
    //         action.payload.id,
    //         action.payload.address,
    //         action.payload.journey,
    //         selectedUser))
    //     .switchMap(selectedUser => this._userService.updateUser(selectedUser)
    //         .pipe(
    //             map(responce => new EditUserSuccessAction(responce)),
    //             catchError((responce: HttpErrorResponse) => of(
    //                 new EditUserFailureAction(responce.error.Message)))
    //         ));

    // @Effect()
    // EditUserContactInformation: Observable<Action> = this._actions
    //     .ofType<EditUserContactInformationRequestAction>(UserActionTypes.EDIT_USER_CONTACT_INFORMATION_REQUEST)
    //     .withLatestFrom(this._store.select(x => x.user.selectedUser))
    //     .map(([action, selectedUser]) => this.editUserContactInformation(
    //         action.payload.address,
    //         action.payload.email,
    //         action.payload.mobilePhoneNumber,
    //         action.payload.preferedLanguage,
    //         selectedUser))
    //     .switchMap(selectedUser => this._userService.updateUser(selectedUser)
    //         .pipe(
    //             map(responce => new EditUserSuccessAction(responce)),
    //             catchError((responce: HttpErrorResponse) => of(
    //                 new EditUserFailureAction(responce.error.Message)))
    //         ));

    @Effect()
    EditUserPersonalInformation: Observable<Action> = this._actions
        .ofType<EditUserPersonalInformationRequestAction>(UserActionTypes.EDIT_USER_PERSONAL_INFORMATION_REQUEST)
        .withLatestFrom(this._store.select(x => x.user.selectedUser))
        .map(([action, selectedUser]) => this.editUserPersonalInformation(
            action.payload.firstName,
            action.payload.lastName,
            action.payload.gender,
            action.payload.title,
            selectedUser
        ))
        .switchMap(selectedUser => this._userService.updateUser(selectedUser)
            .pipe(
                map(responce => new EditUserSuccessAction(responce)),
                catchError((responce: HttpErrorResponse) => of(
                    new EditUserFailureAction(responce.error.Message)))
            ));

    // @Effect()
    // EditUserJourneyInformation: Observable<Action> = this._actions
    //     .ofType<EditUserJourneyInformationRequestAction>(UserActionTypes.EDIT_JOURNEY_INFORMATION_REQUEST)
    //     .withLatestFrom(this._store.select(x => x.user.selectedUser))
    //     .map(([action, selectedUser]) => this.editJourneyInformation(
    //         action.payload.journeyStatus,
    //         action.payload.userType,
    //         selectedUser
    //     ))
    //     .switchMap(selectedUser => this._userService.updateUser(selectedUser)
    //         .pipe(
    //             map(responce => new EditUserSuccessAction(responce)),
    //             catchError((responce: HttpErrorResponse) => of(
    //                 new EditUserFailureAction(responce.error.Message)))
    //         ));

    // @Effect()
    // EditUserPropertyMeterInformation: Observable<Action> = this._actions
    //     .ofType<EditUserPropertiesMeterInformationRequestAction>(UserActionTypes.EDIT_USER_PROPERTY_METER_INFORMATION_REQUEST)
    //     .withLatestFrom(this._store.select(x => x.user.selectedUser))
    //     .map(([action, selectedUser]) => this.editUserPropertyMeterInformation(
    //         action.payload.meterId,
    //         action.payload.meterType,
    //         action.payload.pointNumber,
    //         action.payload.serialNumber,
    //         selectedUser
    //     ))
    //     .switchMap(selectedUser => this._userService.updateUser(selectedUser)
    //         .pipe(
    //             map(responce => new EditUserSuccessAction(responce)),
    //             catchError((responce: HttpErrorResponse) => of(
    //                 new EditUserFailureAction(responce.error.Message)))
    //         ));

    // @Effect()
    // EditUserPropertyQuoteInformation = this._actions
    //     .ofType<EditUserPropertiesQuoteInformationRequestAction>(UserActionTypes.EDIT_USER_PROPERTY_QUOTE_INFORMATION_REQUEST)
    //     .withLatestFrom(this._store.select(x => x.user.selectedUser))
    //     .map(([action, selectedUser]) => this.editUserPropertyQuoteInformation(
    //         action.payload.quoteHashCode,
    //         action.payload.networkOperatorNumber,
    //         action.payload.nighttimeUnitRatePerKWh,
    //         action.payload.nighttimeUsageAnnual,
    //         action.payload.standingChargeMonthly,
    //         action.payload.totalBillEstimateAnnual,
    //         action.payload.totalSavingAnnual,
    //         action.payload.unitRatePerKWh,
    //         action.payload.validForYear,
    //         action.payload.validFrom,
    //         action.payload.validTo,
    //         selectedUser
    //     ))
    //     .switchMap(selectedUser => this._userService.updateUser(selectedUser)
    //         .pipe(
    //             map(responce => new EditUserSuccessAction(responce)),
    //             catchError((responce: HttpErrorResponse) => of(
    //                 new EditUserFailureAction(responce.error.Message)))
    //         ));

    // @Effect()
    // EditUserPropertySubscriptionInformation = this._actions
    //     .ofType<EditUserPropertiesSubscriptionInformationRequestAction>(UserActionTypes.EDIT_USER_PROPERTY_SUBSCRIPTION_INFORMATION_REQUEST)
    //     .withLatestFrom(this._store.select(x => x.user.selectedUser))
    //     .map(([action, selectedUser]) => this.editUserPropertySubscriptionInformation(
    //         action.payload.annualConsumption,
    //         action.payload.nighttimeAnnualConsumption,
    //         action.payload.subscriptionId,
    //         action.payload.supplyEndDate,
    //         action.payload.supplyStartDate,
    //         selectedUser
    //     ))
    //     .switchMap(selectedUser => this._userService.updateUser(selectedUser).pipe(
    //         map(responce => new EditUserSuccessAction(responce)),
    //         catchError((responce: HttpErrorResponse) => of(
    //             new EditUserFailureAction(responce.error.Message)))
    //     ));

    @Effect({ dispatch: false })
    editUserFailure = this._actions
        .ofType<EditUserFailureAction>(UserActionTypes.EDIT_USER_FAILURE)
        .map((action) => this._alertService
            .show(new AlertContext(AlertType.Failure,
                `Failed to Update User: ${action.payload}!`)
            ));

    @Effect({ dispatch: false })
    editUserSuccess = this._actions
        .ofType<EditUserSuccessAction>(UserActionTypes.EDIT_USER_SUCCESS)
        .map((action) => this._alertService
            .show(new AlertContext(AlertType.Success,
                `Successfuly Updated User with Id: ${action.payload.Id.id}!`)
            )
        );



        private editUserPropertyInformation(
            id: CustomId,
            address: Address,
            journey,
            user: UserFull
        ): UserFull {
            user = Object.assign({}, user);

            const propertyIndex = user.FullPropertyInfoViews
                .findIndex(x => x.Id.id === id.id);

            // (TODO)PPavlov: Refactor at a later stage and
            // remove multiple addresses for property info or figure a more appropriate way to handle them
            const addressIndex = user.FullPropertyInfoViews[propertyIndex].Addresses
                .findIndex(a => +a.Type === 1);
            address.Type = '1';

            user.FullPropertyInfoViews[propertyIndex].Addresses[addressIndex] = address;
            user.FullPropertyInfoViews[propertyIndex].Journey.Step = journey;

            return user;
        }

        private editUserContactInformation(
            address: Address,
            email: string,
            mobilePhoneNumber: string,
            preferedLanguage: LanguageType,
            user: UserFull
        ): UserFull {
            user = Object.assign({}, user);

            user.HomeAddress = address;
            user.Email = email;
            user.MobilePhoneNumber = mobilePhoneNumber;
            // TODO(PPavlov): Refactor UserFull to use LanguageType Enum
            user.PreferredLanguage = LanguageType[preferedLanguage];

            return user;
        }

        private editUserPersonalInformation(
            firstName: string,
            lastName: string,
            gender: GenderType,
            title: TitleType,
            user: UserFull
        ): UserFull {
            user = Object.assign({}, user);

            user.FirstName = firstName;
            user.LastName = lastName;
            user.Gender = gender;
            user.Title = title;

            return user;
        }

        private editJourneyInformation(
            journeyStatus: JourneyStatus,
            userType: UserType,
            user: UserFull
        ): UserFull {
            user = Object.assign({}, user);

            user.Journey.JourneyStatus = journeyStatus;
            user.Journey.Step = this.mapUserJourneyStatusToJourneyStep(journeyStatus);
            user.UserType = userType;

            return user;
        }

        private editUserPropertyMeterInformation(
            meterId: CustomId,
            meterType: MeterType,
            pointNumber: string,
            serialNumber: string,
            user: UserFull
        ): UserFull {
            user = Object.assign({}, user);

            const meter: Meter = Array.prototype.concat(...user.FullPropertyInfoViews
                .map(f => f.Meters))
                .find((m) => m.Id.id === meterId.id);

            meter.MeterType = meterType;
            meter.PointNumber = pointNumber;
            meter.SerialNumber = serialNumber;

            return user;
        }

        // TODO(PPavlov): Too many params refactor to use Quote, add types
        private editUserPropertyQuoteInformation(
            quoteHashCode,
            networkOperatorNumber,
            nighttimeUnitRatePerKWh,
            nighttimeUsageAnnual,
            standingChargeMonthly,
            totalBillEstimateAnnual,
            totalSavingAnnual,
            unitRatePerKWh,
            validForYear,
            validFrom,
            validTo,
            user: UserFull
        ): UserFull {
            user = Object.assign({}, user);

            const subscriptions = Array.prototype.concat(...user.FullPropertyInfoViews
                .map(p => p.Subscriptions));

            const quotes = Array.prototype.concat(...subscriptions
                .map(s => s.Quotes));

            const quote = quotes.find(q => Object.assign(
                new Quote(), q).GetHashCode() === quoteHashCode);

            const correctValidFrom =  moment.utc(validFrom).add(0, 'h').add(0, 'm').add(0, 's');
            const correctValidTo =  moment.utc(validTo).add(23, 'h').add(59, 'm').add(59, 's');

            quote.NetworkOperatorNumber = networkOperatorNumber;
            quote.NighttimeUsageAnnual = nighttimeUsageAnnual;
            quote.UnitRatePerKWh = unitRatePerKWh;
            quote.NighttimeUnitRatePerKWh = nighttimeUnitRatePerKWh;
            quote.TotalSavingAnnual = totalSavingAnnual;
            quote.TotalBillEstimateAnnual = totalBillEstimateAnnual;
            quote.ValidForYear = validForYear;
            quote.StandingChargeMonthly = standingChargeMonthly;
            quote.ValidTo = correctValidTo.toISOString();
            quote.ValidFrom = correctValidFrom.toISOString();

            return user;
        }

        // TODO(PPavlov): Add types to params
        private editUserPropertySubscriptionInformation(
            annualConsumption,
            nighttimeAnnualConsumption,
            subscriptionId,
            supplyEndDate,
            supplyStartDate,
            user
        ): UserFull {
            user = Object.assign({}, user);

            const subscriptions = Array.prototype.concat(...user.FullPropertyInfoViews
                .map(p => p.Subscriptions));

            const subscription = subscriptions
                .find(s => s.Id.id === subscriptionId.id);

            subscription.AnnualConsumption = annualConsumption;
            subscription.NighttimeAnnualConsumption = nighttimeAnnualConsumption;
            subscription.SupplyStartDate = supplyStartDate;
            subscription.SupplyEndDate = supplyEndDate;

            return user;
        }

        private mapUserJourneyStatusToJourneyStep(journeyStatus: JourneyStatus) {

            switch (journeyStatus) {
                case JourneyStatus.WaitingForValidation:
                  return JourneyStep.VerifyEmail;

                case JourneyStatus.WeWillEmailYou:
                  return JourneyStep.NotifySupplier;

                case JourneyStatus.SetupPayment:
                  return JourneyStep.EnterPaymentDetails;

                case JourneyStatus.CustomerActivated:
                  return JourneyStep.Done;

                case JourneyStatus.JourneyFinalized:
                  return JourneyStep.Done;
                default:
                  return JourneyStep.VerifyEmail;
              }
        }
}
