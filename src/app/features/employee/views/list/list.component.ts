import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  standalone: false,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  constructor(private employeeSvc: EmployeeService) { }

  get employees$() {
    return this.employeeSvc.employees$;
  }
}
