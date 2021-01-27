import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

@Injectable()
export class LoadingEffects {
    constructor(
        private _actions: Actions,
    ) { }

    // @Effect()
    // enableLoading: Observable<Action> = this._actions
    //     .ofType(
    //         // UserActionTypes.EDIT_USER_PROPERTY_INFORMATION_REQUEST,
    //         // UserActionTypes.EDIT_USER_CONTACT_INFORMATION_REQUEST,
    //         UserActionTypes.EDIT_USER_PERSONAL_INFORMATION_REQUEST,
    //         // UserActionTypes.EDIT_USER_PROPERTY_METER_INFORMATION_REQUEST,
    //         // UserActionTypes.EDIT_USER_PROPERTY_QUOTE_INFORMATION_REQUEST,
    //         // UserActionTypes.EDIT_USER_PROPERTY_SUBSCRIPTION_INFORMATION_REQUEST,
    //         // UserActionTypes.EDIT_USER_SUBSCRIPTION_EXTERNAL_IDS_REQUEST,

    //         // MeterActionTypes.EDIT_METER_READ_VALUE_REQUEST,
    //         // MeterActionTypes.ADD_METER_READ_REQUEST
    //     ).map((action) => new EnableLoadingAction());

    // @Effect()
    // disableLoading: Observable<Action> = this._actions
    //     .ofType(
    //         UserActionTypes.EDIT_USER_SUCCESS,
    //         UserActionTypes.EDIT_USER_FAILURE
    //     ).map((action) => new DisableLoadingAction());
}
