import { Action } from "@ngrx/store";
import { UserView } from "src/app/@modules/users/models/user-view";

export enum UserActionTypes {

    INITIALIZE_USER = 'INITIALIZE_USER',
    SELECT_USER = 'SELECT_USER',
    SELECT_USER_SUCCESS = 'SELECT_USER_SUCCESS',
    SELECT_USER_FAILURE = 'SELECT_USER_FAILURE',

    EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILURE = 'EDIT_USER_FAILURE',

    // UPDATE_USER_PROFILE_PICTURE_REQUEST = 'UPDATE_USER_PROFILE_PICTURE_REQUEST',
    EDIT_USER_PERSONAL_INFORMATION_REQUEST = 'EDIT_USER_PERSONAL_INFORMATION_REQUEST',
}

export type UserActions =
  InitializeUserAction |
  SelectUserAction |
  SelectUserSuccessAction |
  SelectUserFailureAction |
  EditUserSuccessAction |
  EditUserFailureAction |
  EditUserPersonalInformationRequestAction;
  // | UpdateUserProfilePictureRequestAction;
  // | FetchUserSuccessAction;

export class InitializeUserAction implements Action {
    public readonly type = UserActionTypes.INITIALIZE_USER;
    constructor(public payload: UserView) { }
}

export class SelectUserAction implements Action {
    public readonly type = UserActionTypes.SELECT_USER;
    constructor() { }
}

export class SelectUserSuccessAction implements Action {
  readonly type = UserActionTypes.SELECT_USER_SUCCESS;

  constructor(public payload: UserView) {
    console.log(payload);
   }
}
export class SelectUserFailureAction implements Action {
  readonly type = UserActionTypes.SELECT_USER_FAILURE;

  constructor(public payload: any) { }
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

// export class UpdateUserProfilePictureRequestAction implements Action {
//     readonly type = UserActionTypes.UPDATE_USER_PROFILE_PICTURE_REQUEST;

//     constructor(public payload: { imgUrl: string }) { }
// }



