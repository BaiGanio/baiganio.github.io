import { UserView } from 'src/app/@modules/users/models/user-view';
import { UserActionTypes, UserActions } from '../actions/user.actions';
import { UserState } from '../app.state';

export const initialState: UserState = { selectedUser: new UserView() };

export function userReducer(state = {}, action: UserActions) {
    switch (action.type) {
      case UserActionTypes.SELECT_USER:
        return {
          ...state,
          loading: true
        };
      case UserActionTypes.SELECT_USER_SUCCESS:
        return {
          ...state,
          selectedUser: action.payload,
          loading: false
        };
      case UserActionTypes.SELECT_USER_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      case UserActionTypes.EDIT_USER:
        return { ...state, loading: true };
      case UserActionTypes.EDIT_USER_SUCCESS:
        return { ...state, selectedUser: action.payload, loading: false };
      case UserActionTypes.EDIT_USER_FAILURE:
        return { ...state, error: action.payload, loading: false };
      default:
          return state;
    }
}
