import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { DetailComponent } from './views/detail/detail.component';

const routes: Routes = [
  { 
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: ':id',
        component: DetailComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
