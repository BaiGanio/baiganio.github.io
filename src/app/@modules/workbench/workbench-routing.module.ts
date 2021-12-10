import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WorkbenchComponent } from './workbench.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', component: WorkbenchComponent },
  { path: 'chart', component: ChartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WorkbenchRoutingModule { }
