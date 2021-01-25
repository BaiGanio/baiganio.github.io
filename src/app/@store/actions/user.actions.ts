import { UserView } from "src/app/@modules/users/models/user-view";

export enum UserActionTypes {
    EDIT_USER_PERSONAL_INFORMATION_REQUEST = 'EDIT_USER_PERSONAL_INFORMATION_REQUEST',

    EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILURE = 'EDIT_USER_FAILURE',

    SELECT_USER = 'SELECT_USER'
}

export type UserActions =
    SelectUserAction;
    //  |
    // EditUserSuccessAction |
    // EditUserFailureAction;

export class SelectUserAction implements Action {
    public readonly type = UserActionTypes.SELECT_USER;

    constructor(public payload: UserView) { }
}

// export class EditUserSuccessAction implements Action {
//     readonly type = UserActionTypes.EDIT_USER_SUCCESS;

//     constructor(public payload: UserFull) { }
// }

// export class EditUserFailureAction implements Action {
//     readonly type = UserActionTypes.EDIT_USER_FAILURE;

//     constructor(public payload: any) { }
// }

// export class EditUserPropertiesInformationRequestAction implements Action {
//     readonly type = UserActionTypes.EDIT_USER_PROPERTY_INFORMATION_REQUEST;

//     constructor(public payload: { id: CustomId, address: Address, journey: any }) { }
// }

// export class EditUserContactInformationRequestAction implements Action {
//     readonly type = UserActionTypes.EDIT_USER_CONTACT_INFORMATION_REQUEST;

//     constructor(public payload: {
//         address: Address,
//         email: string,
//         preferedLanguage: LanguageType,
//         mobilePhoneNumber: string
//     }) { }
// }

// export class EditUserPersonalInformationRequestAction implements Action {
//     readonly type = UserActionTypes.EDIT_USER_PERSONAL_INFORMATION_REQUEST;

//     constructor(public payload: {
//         firstName: string,
//         lastName: string,
//         title: TitleType,
//         gender: GenderType
//     }) { }
// }

// export class EditUserJourneyInformationRequestAction implements Action {
//     readonly type = UserActionTypes.EDIT_JOURNEY_INFORMATION_REQUEST;

//     constructor(public payload: {
//         journeyStatus: JourneyStatus,
//         userType: UserType,
//     }) { }
// }

// export class EditUserPropertiesMeterInformationRequestAction implements Action {
//     readonly type = UserActionTypes.EDIT_USER_PROPERTY_METER_INFORMATION_REQUEST;

//     constructor(public payload: {
//         meterId: CustomId,
//         pointNumber: string,
//         serialNumber: string,
//         meterType: MeterType
//     }) { }
// }

// export class EditUserPropertiesQuoteInformationRequestAction implements Action {
//     readonly type = UserActionTypes.EDIT_USER_PROPERTY_QUOTE_INFORMATION_REQUEST;

//     constructor(public payload: {
//         quoteHashCode,
//         networkOperatorNumber,
//         nighttimeUsageAnnual
//         unitRatePerKWh
//         usageAnnual
//         nighttimeUnitRatePerKWh
//         totalSavingAnnual
//         totalBillEstimateAnnual
//         validForYear
//         standingChargeMonthly,
//         validTo,
//         validFrom
//     }) { }
// }

// export class EditUserPropertiesSubscriptionInformationRequestAction implements Action {
//     readonly type = UserActionTypes.EDIT_USER_PROPERTY_SUBSCRIPTION_INFORMATION_REQUEST;

//     constructor(public payload: {
//         subscriptionId: CustomId
//         supplyStartDate,
//         supplyEndDate,
//         annualConsumption,
//         nighttimeAnnualConsumption
//     }) { }
// }



