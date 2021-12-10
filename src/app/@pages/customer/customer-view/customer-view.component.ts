import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/@shared/models/customer';

import {selectCustomers} from 'src/app/@store/selectors/customer.selectors';
import { CustomerState } from 'src/app/@store/reducers/customer.reducer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  customers$: Observable<Customer[]>;
  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
   }

  ngOnInit(): void {
  }

}
