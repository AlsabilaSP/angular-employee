import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { EmployeeComponent } from './views/employee/employee.component';

const routes: Routes = [
  { 
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        component: ListComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
