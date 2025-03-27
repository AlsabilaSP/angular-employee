import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';
import { employeeMockData } from '../models/employee.mock';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees = new BehaviorSubject<Employee[]>(this.generateMockEmployees());
  employees$ = this.employees.asObservable();

  private generateMockEmployees(): Employee[] {
    const newData: Employee[] = employeeMockData.map(item => ({
      ...item,
      birthDate: new Date(item.birthDate),
      description: new Date(item.description)
    }));
    return newData;
  }

  addEmployee(employee: Employee) {
    const updatedEmployees = [...this.employees.value, employee];
    this.employees.next(updatedEmployees);
  }

  deleteEmployee(id: number) {
    const updatedEmployees = this.employees.value.filter(emp => emp.id !== id);
    this.employees.next(updatedEmployees);
  }

  editEmployee(updatedEmployee: Employee) {
    const updatedEmployees = this.employees.value.map(emp =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    this.employees.next(updatedEmployees);
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.value.find(emp => emp.id === id);
  }
}