import { UserActionTypes, UserActions } from '../actions/user.actions';

const initialState = {
    selectedUser: null
};

export function userReducer(state = initialState, action: UserActions) {
    switch (action.type) {
        case UserActionTypes.SELECT_USER:
            return { ...state, selectedUser: action.payload };
        case UserActionTypes.EDIT_USER_FAILURE:
            return state;
        case UserActionTypes.EDIT_USER_SUCCESS:
            return { ...state, selectedUser: action.payload };
        default:
            return state;
    }
}
