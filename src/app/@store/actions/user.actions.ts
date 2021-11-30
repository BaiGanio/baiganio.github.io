import { Action } from "@ngrx/store";
import { UserView } from "src/app/@modules/users/models/user-view";

export enum UserActionTypes {
    SELECT_USER = '[User] SELECT_USER',
    SELECT_USER_SUCCESS = '[User]  SELECT_USER_SUCCESS',
    SELECT_USER_FAILURE = '[User]  SELECT_USER_FAILURE',
    EDIT_USER = '[User]  EDIT_USER',
    EDIT_USER_SUCCESS = '[User]  EDIT_USER_SUCCESS',
    EDIT_USER_FAILURE = '[User]  EDIT_USER_FAILURE',
}

export type UserActions =
  SelectUserAction |
  SelectUserSuccessAction |
  SelectUserFailureAction |
  EditUserAction |
  EditUserSuccessAction |
  EditUserFailureAction;

export class SelectUserAction implements Action {
    public readonly type = UserActionTypes.SELECT_USER;
    constructor(){
      console.log('SelectUserAction');
    }
}

export class SelectUserSuccessAction implements Action {
  readonly type = UserActionTypes.SELECT_USER_SUCCESS;
  constructor(public payload: any) {  console.log(payload.body);}
}
export class SelectUserFailureAction implements Action {
  readonly type = UserActionTypes.SELECT_USER_FAILURE;
  constructor(public payload: any) { console.log('SelectUserFailureAction');}
}
export class EditUserAction implements Action {
  readonly type = UserActionTypes.EDIT_USER;
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



