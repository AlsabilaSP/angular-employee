import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { DetailComponent } from './views/detail/detail.component';
import { AddComponent } from './views/add/add.component';
import { EditComponent } from './views/edit/edit.component';

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
        path: 'detail/:id',
        component: DetailComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
