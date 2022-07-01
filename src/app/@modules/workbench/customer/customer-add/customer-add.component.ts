import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from 'src/app/@shared/models/customer';
import { addCustomer } from 'src/app/@store/actions/customer.actions';
import { CustomerState } from 'src/app/@store/reducers/customer.reducer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(private store: Store<CustomerState>) {
  }
  addCustomer(customerName: string): void {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomer(customer));
  }

  ngOnInit(): void { console.log('Lifecycle methods should not be empty');
  }

}
