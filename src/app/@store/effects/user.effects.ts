// import { Injectable } from '@angular/core';
// import { Actions, Effect, ofType, createEffect  } from '@ngrx/effects';
// import { Observable } from 'rxjs';
// import { Action, Store } from '@ngrx/store';
// import 'rxjs/add/operator/withLatestFrom';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/catch';

// import {
//   UserActionTypes,
//   EditUserAction,
//   EditUserFailureAction,
//   EditUserSuccessAction,
//   SelectUserAction,
//   SelectUserSuccessAction,
//   SelectUserFailureAction
// } from '../actions/user.actions';
// import { AppState } from '../app.state';

// import { map, mergeMap, withLatestFrom, catchError } from 'rxjs/operators';

// import { HttpErrorResponse } from '@angular/common/http';
// import { of } from 'rxjs';
// import { UserDataService } from 'src/app/@services/user-data.service';
// import { UserView } from 'src/app/@modules/users/models/user-view';
// import { AlertContext, AlertType, FhAlertService } from 'src/app/@shared/fh-alert/fh-alert-service';

// @Injectable()
// export class UserEffects {
//     constructor(
//         private _actions: Actions,
//         private _store: Store<AppState>,
//         private _userService: UserDataService,
//         private _alertService: FhAlertService
//     ) { }

//     @Effect()
//     public selectedUser$: Observable<Action> = this._actions
//       .pipe(
//         ofType<SelectUserAction>(UserActionTypes.SELECT_USER),
//         mergeMap(
//           () => this._userService.getUserByToken()
//             .pipe(
//               map(data => new SelectUserSuccessAction(data)),
//               catchError((error: HttpErrorResponse) => of(new EditUserFailureAction(error)))
//             )
//         )
//       )

//       @Effect({ dispatch: false })
//       selectUserSuccess = this._actions.pipe(
//           ofType<SelectUserSuccessAction>(UserActionTypes.SELECT_USER_SUCCESS),
//           map((action) => {
//             this._alertService.show(new AlertContext(AlertType.Success, `Successfuly selected User with Id: ${action.payload.Id}!`))
//             console.log(action.payload);
//             })
//       )

//     @Effect({ dispatch: false })
//     editUserFailure = this._actions.pipe(
//         ofType<EditUserFailureAction>(UserActionTypes.EDIT_USER_FAILURE),
//         map((action) => this._alertService.show(new AlertContext(AlertType.Failure, `Failed to Update User: ${action.payload}!`)))
//     )

//     @Effect({ dispatch: false })
//     editUserSuccess = this._actions.pipe(
//         ofType<EditUserSuccessAction>(UserActionTypes.EDIT_USER_SUCCESS),
//         map((action) => this._alertService.show(new AlertContext(AlertType.Success, `Successfuly Updated User with Id: ${action.payload.Id}!`)))
//     )

//     private getUser(user: UserView): UserView {
//         user = Object.assign({}, user);
//         return user;
//     }
// }
