import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkbenchComponent } from './workbench.component';
import { WorkbenchRoutingModule } from './workbench-routing.module';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { ChartComponent } from './chart/chart.component';
import { ReadComponent } from './tutorial/read/read.component';
import { CreateComponent } from './tutorial/create/create.component';
import { StoreModule } from '@ngrx/store';

import {customerFeatureKey, reducer} from 'src/app//@store/reducers/customer.reducer';
import { ChartsModule } from 'ng2-charts';
import { selectedTabFeatureKey, selectedTabReducer } from 'src/app/@store/reducers/selected-tab.reducer';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    WorkbenchComponent,
    CustomerViewComponent,
    CustomerAddComponent,
    ChartComponent,
    ReadComponent,
    CreateComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    WorkbenchRoutingModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
    StoreModule.forFeature(selectedTabFeatureKey, selectedTabReducer),
    AngularMaterialModule,
    ReactiveFormsModule,
    ChartsModule
  ]
})
export class WorkbenchModule { }
