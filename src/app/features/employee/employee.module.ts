import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './views/employee/employee.component';
import { ListComponent } from './views/list/list.component';
import { PrimengModule } from '../../shared/material/primeng.module';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DetailComponent } from './views/detail/detail.component';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
    EmployeeComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    MaterialModule,
    PrimengModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class EmployeeModule { }
