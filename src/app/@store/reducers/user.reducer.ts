import { UserActionTypes, UserActions } from '../actions/user.actions';
import { UserState } from '../app.state';

export const initialState: UserState = {
    selectedUser: null,// new UserView('ID1', 'example@mail.com', 'wild', 'one')
};

export function userReducer(state = initialState, action: UserActions) {
    switch (action.type) {
        case UserActionTypes.SELECT_USER:
            return { ...state, user: action.payload };
        case UserActionTypes.INITIALIZE_USER:
            return { ...state, user: action.payload };
        case UserActionTypes.EDIT_USER_FAILURE:
            return state;
        case UserActionTypes.EDIT_USER_SUCCESS:
            return { ...state, user: action.payload };
        case UserActionTypes.EDIT_USER_PERSONAL_INFORMATION_REQUEST:
            return { ...state, user: action.payload };
        case UserActionTypes.UPDATE_USER_PROFILE_PICTURE_REQUEST:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}
