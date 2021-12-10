import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/@shared/models/customer';

export const loadCustomer = createAction(
  '[Customer] Load Customer'
);

export const addCustomer = createAction(
  '[Customer] Add Customer',
  (customer: Customer) => ({customer})
);

export const loadCustomerSuccess = createAction(
  '[Customer] Load Customer Success',
  props<{ data: any }>()
);

export const loadCustomerFailure = createAction(
  '[Customer] Load Customer Failure',
  props<{ error: any }>()
);
