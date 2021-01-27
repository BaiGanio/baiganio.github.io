import { Action } from "@ngrx/store";
import { UserView } from "src/app/@modules/users/models/user-view";

export enum UserActionTypes {

    INITIALIZE_USER = 'INITIALIZE_USER',
    SELECT_USER = 'SELECT_USER',

    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILURE = 'EDIT_USER_FAILURE',
    UPDATE_USER_PROFILE_PICTURE_REQUEST = 'UPDATE_USER_PROFILE_PICTURE_REQUEST',
    EDIT_USER_PERSONAL_INFORMATION_REQUEST = 'EDIT_USER_PERSONAL_INFORMATION_REQUEST',
}

export type UserActions =
    SelectUserAction |
    EditUserSuccessAction |
    EditUserFailureAction |
    EditUserPersonalInformationRequestAction |
    UpdateUserProfilePictureRequestAction |
    InitializeUserAction |
    FetchUserSuccessAction;

export class InitializeUserAction implements Action {
    public readonly type = UserActionTypes.INITIALIZE_USER;
    constructor(public payload: UserView) { }
}

export class SelectUserAction implements Action {
    public readonly type = UserActionTypes.SELECT_USER;

    constructor(public payload: { userId: string }) { }
}

export class FetchUserSuccessAction implements Action {
    readonly type = UserActionTypes.FETCH_USER_SUCCESS;

    constructor(public payload: UserView) { }
}

export class EditUserSuccessAction implements Action {
    readonly type = UserActionTypes.EDIT_USER_SUCCESS;

    constructor(public payload: UserView) { }
}

export class EditUserFailureAction implements Action {
    readonly type = UserActionTypes.EDIT_USER_FAILURE;

    constructor(public payload: any) { }
}

export class EditUserPersonalInformationRequestAction implements Action {
    readonly type = UserActionTypes.EDIT_USER_PERSONAL_INFORMATION_REQUEST;

    constructor(public payload: {
        firstName: string,
        lastName: string,
        email: string
    }) { }
}

export class UpdateUserProfilePictureRequestAction implements Action {
    readonly type = UserActionTypes.UPDATE_USER_PROFILE_PICTURE_REQUEST;

    constructor(public payload: { imgUrl: string }) { }
}



