import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as userView from '../app.state';

export const userState = createFeatureSelector<userView.UserState>(
    userView.userFeatureKey,
);

export const selectUser = createSelector(
    userState,
    (state: userView.UserState) => state.selectedUser
);

export const fetchUser = createSelector(
    userState,
    (state: userView.UserState) => state.selectedUser
);
