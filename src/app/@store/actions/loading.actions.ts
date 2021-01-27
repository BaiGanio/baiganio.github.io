import { Action } from '@ngrx/store';

export enum LoadingActionTypes {
    ENABLE_LOADING = 'ENABLE_LOADING',
    DISABLE_LOADING = 'DISABLE_LOADING'
}

export class EnableLoadingAction implements Action {
    readonly type = LoadingActionTypes.ENABLE_LOADING;
}

export class DisableLoadingAction implements Action {
    readonly type = LoadingActionTypes.DISABLE_LOADING;
}

export type LoadingActions = EnableLoadingAction | DisableLoadingAction;
