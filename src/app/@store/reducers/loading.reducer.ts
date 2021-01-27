import { LoadingActionTypes, LoadingActions } from '../actions/loading.actions';

const initialState = false;

export function loadingReducer(state = initialState, action: LoadingActions) {
    switch (action.type) {
        case LoadingActionTypes.ENABLE_LOADING:
            return true;
        case LoadingActionTypes.DISABLE_LOADING:
            return false;
        default:
            return state;
    }
}
