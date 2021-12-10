import { Action, createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/@shared/models/customer';
import * as CustomerActions from '../actions/customer.actions';


export const customerFeatureKey = 'customer';

export interface CustomerState { customers: Customer[]; }

export const initialState: CustomerState = { customers: [] };

export const customerReducer  = createReducer(
  initialState,
  on(CustomerActions.addCustomer,
    (state: CustomerState, {customer}) =>
      ({...state,
        customers: [...state.customers, customer]
      }))
);

export function reducer(state: CustomerState | undefined, action: Action): any {
  return customerReducer(state, action);
}
