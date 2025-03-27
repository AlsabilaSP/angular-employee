import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './views/employee/employee.component';
import { ListComponent } from './views/list/list.component';
import { PrimengModule } from '../../shared/material/primeng.module';


@NgModule({
  declarations: [
    EmployeeComponent,
    ListComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    EmployeeRoutingModule,
    PrimengModule
  ]
})
export class EmployeeModule { }
