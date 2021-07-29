import { Action } from "@ngrx/store";
import { UserView } from "src/app/@modules/users/models/user-view";

export enum UserActionTypes {

    SELECT_USER = 'SELECT_USER',
    SELECT_USER_SUCCESS = 'SELECT_USER_SUCCESS',
    SELECT_USER_FAILURE = 'SELECT_USER_FAILURE',

    EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILURE = 'EDIT_USER_FAILURE',
}

export type UserActions =
  SelectUserAction |
  SelectUserSuccessAction |
  SelectUserFailureAction |
  EditUserSuccessAction |
  EditUserFailureAction;


export class SelectUserAction implements Action {
    public readonly type = UserActionTypes.SELECT_USER;
    constructor() { }
}

export class SelectUserSuccessAction implements Action {
  readonly type = UserActionTypes.SELECT_USER_SUCCESS;
  constructor(public payload: UserView) { }
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



