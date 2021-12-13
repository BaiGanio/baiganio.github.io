import { Action } from '@ngrx/store';

export const SelectedTabActionsTypes = {
    TAB_CHANGED_ACTION: '[Selected Tab] -Tab changed-',
};

export class SelectedTabChangedAction implements Action {
    type = SelectedTabActionsTypes.TAB_CHANGED_ACTION;
    constructor(public payload: any) { }
}
