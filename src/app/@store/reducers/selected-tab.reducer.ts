import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../actions/customer.actions';
import { SelectedTabActionsTypes, SelectedTabChangedAction } from '../actions/selected-tab.actions';


export const selectedTabFeatureKey = 'selectedTab';

export interface SelectedTabState { selectedTab: string; }

export const initialState: SelectedTabState = { selectedTab: 'nav-tab1-tab' };

export function selectedTabReducer(state = initialState, action: SelectedTabChangedAction): SelectedTabState {

  switch (action.type) {

      case SelectedTabActionsTypes.TAB_CHANGED_ACTION: {
          return Object.assign(state, {
              ...state,
              selectedTab: action.payload
          });
      }
  }
}
