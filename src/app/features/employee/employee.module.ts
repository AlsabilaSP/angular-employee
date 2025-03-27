import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './views/employee/employee.component';
import { ListComponent } from './views/list/list.component';
import { PrimengModule } from '../../shared/material/primeng.module';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    EmployeeComponent,
    ListComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    PrimengModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class EmployeeModule { }
