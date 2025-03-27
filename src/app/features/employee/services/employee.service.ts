import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees = new BehaviorSubject<Employee[]>(this.generateMockEmployees());
  employees$ = this.employees.asObservable();

  private generateMockEmployees(): Employee[] {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      username: `emp${i + 1}`,
      firstName: `Employee`,
      lastName: `${i + 1}`,
      email: `employee${i + 1}@company.com`,
      birthDate: new Date('07-03-1998'),
      basicSalary: 5000000,
      status: '',
      group: '',
      description: new Date('30-10-2020')
    }));
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