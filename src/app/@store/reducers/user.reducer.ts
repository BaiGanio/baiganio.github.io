import { UserActionTypes, UserActions } from '../actions/user.actions';
import { UserState } from '../app.state';

// export const initialState: UserState = {
//     selectedUser: {};
// };

export function userReducer(state = {}, action: UserActions) {
    switch (action.type) {
        case UserActionTypes.SELECT_USER_SUCCESS:
          return { ...state, user: action.payload };
        case UserActionTypes.SELECT_USER_FAILURE:
          return { ...state, user: action.payload };
          case UserActionTypes.EDIT_USER_SUCCESS:
            return { ...state, user: action.payload };
        case UserActionTypes.EDIT_USER_FAILURE:
          return { ...state, user: action.payload };
        default:
            return state;
    }
}
