import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect  } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import {
    EditUserPersonalInformationRequestAction,
    EditUserFailureAction,
    EditUserSuccessAction,
    UserActionTypes,
    SelectUserAction,
    InitializeUserAction,
    SelectUserSuccessAction,
} from '../actions/user.actions';
import { AppState } from '../app.state';

import { map, mergeMap, withLatestFrom, catchError } from 'rxjs/operators';

import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { UserDataService } from 'src/app/@services/user-data.service';
import { UserView } from 'src/app/@modules/users/models/user-view';
import { AlertContext, AlertType, FhAlertService } from 'src/app/@shared/fh-alert/fh-alert-service';

@Injectable()
export class UserEffects {
    constructor(
        private _actions: Actions,
        private _store: Store<AppState>,
        private _userService: UserDataService,
        private _alertService: FhAlertService
    ) { }

    @Effect()
    public initializeUser$: Observable<Action> = this._actions
    .pipe(
        ofType<SelectUserAction>(UserActionTypes.INITIALIZE_USER),
        withLatestFrom(this._store.select(x => x.user.selectedUser)),
        mergeMap(selectedUser => this._userService.getUserByToken()
        .pipe(
            map(responce => new InitializeUserAction(responce)),
            catchError((responce: HttpErrorResponse) => of(
                new EditUserFailureAction(responce.error.Message)))
        ))
    )

    @Effect()
    public selectedUser$: Observable<Action> = this._actions
        .pipe(
            ofType<SelectUserAction>(UserActionTypes.SELECT_USER),
            withLatestFrom(this._store.select(x => x.user.selectedUser)),
            map(([action, selectedUser]) => this.getUser(
                selectedUser
            )),
            mergeMap(selectedUser => this._userService.getUserById(selectedUser.Id)
            .pipe(
                map(responce => new SelectUserSuccessAction(responce)),
                catchError((responce: HttpErrorResponse) => of(
                    new EditUserFailureAction(responce.error.Message)))
            ))
    )

    @Effect({ dispatch: false })
    editUserFailure = this._actions.pipe(
        ofType<EditUserFailureAction>(UserActionTypes.EDIT_USER_FAILURE),
        map((action) => this._alertService
            .show(new AlertContext(AlertType.Failure,
                `Failed to Update User: ${action.payload}!`)
            ))
    )
    @Effect({ dispatch: false })
    editUserSuccess = this._actions.pipe(
        ofType<EditUserSuccessAction>(UserActionTypes.EDIT_USER_SUCCESS),
        map((action) => this._alertService
            .show(new AlertContext(AlertType.Success,
                `Successfuly Updated User with Id: ${action.payload.Id}!`)
            ))
    )

    @Effect()
    EditUserPersonalInformation: Observable<Action> = this._actions.pipe(
        ofType<EditUserPersonalInformationRequestAction>(UserActionTypes.EDIT_USER_PERSONAL_INFORMATION_REQUEST),
        withLatestFrom(this._store.select(x => x.user.selectedUser)),
        map(([action, selectedUser]) => this.editUserPersonalInformation(
            action.payload.firstName,
            action.payload.lastName,
            action.payload.email,
            selectedUser
        )),
        mergeMap(selectedUser => this._userService.updateProfile(selectedUser)
            .pipe(
                map(responce => new EditUserSuccessAction(responce)),
                catchError((responce: HttpErrorResponse) => of(
                    new EditUserFailureAction(responce.error.Message)))
            ))
    )

    // @Effect()
    // UpdateUserProfilePictur1e: Observable<Action> = this._actions.pipe(
    //     ofType<UpdateUserProfilePictureRequestAction>(UserActionTypes.UPDATE_USER_PROFILE_PICTURE_REQUEST),
    //     withLatestFrom(this._store.select(x => x.user.selectedUser)),
    //     map(([action, selectedUser]) => this.updateUserProfilePicture(
    //         action.payload.imgUrl,
    //         selectedUser
    //     )),
    //     mergeMap(selectedUser => this._userService.updateProfilePicture(selectedUser)
    //         .pipe(
    //             map(responce => new EditUserSuccessAction(responce)),
    //             catchError((responce: HttpErrorResponse) => of(
    //                 new EditUserFailureAction(responce.error.Message)))
    //         )
    //     )
    // )

    private editUserPersonalInformation(
        firstName: string,
        lastName: string,
        email: string,
        user: UserView
    ): UserView {
        user = Object.assign({}, user);
        user.FirstName = firstName;
        user.LastName = lastName;
        user.Email = email;
        return user;
    }

    private updateUserProfilePicture(imgUrl: string, user: UserView): UserView {
        user = Object.assign({}, user);
        user.ImgUrl = imgUrl;
        return user;
    }

    private getUser(user: UserView): UserView {
        user = Object.assign({}, user);
        return user;
    }
}
