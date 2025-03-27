import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { groupMockData } from '../../models/employee.mock';
import { Employee } from '../../models/employee.model';


@Component({
  standalone: false,
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  options: string[] = groupMockData.map(item => item.name);
  employeeFg = new FormGroup({
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required]),
    basicSalary: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    group: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  currentDate = new Date();


  constructor(
    private router: Router,
    private employeeSvc: EmployeeService,
    private messageService: MessageService
  ) { }

  navigateToList() {
    this.router.navigate(['/employee-list']);
  }

  private generateUniqueId(): string {
    return Math.floor(Math.random() * 100000).toString();
  }

  onSave() {
    if (this.employeeFg.valid) {
      const employee: Employee = {
        id: this.generateUniqueId(),
        username: this.employeeFg.get('username')?.value || '',
        firstName: this.employeeFg.get('firstName')?.value || '',
        lastName: this.employeeFg.get('lastName')?.value || '',
        email: this.employeeFg.get('email')?.value || '',
        birthDate: new Date(this.employeeFg.get('birthDate')?.value || ''), // Convert to Date
        basicSalary: Number(this.employeeFg.get('basicSalary')?.value) || 0, // Convert to Number
        status: this.employeeFg.get('status')?.value || '',
        group: this.employeeFg.get('group')?.value || '',
        description: new Date(this.employeeFg.get('description')?.value || ''), // Convert to Date
      };
      this.employeeSvc.addEmployee(employee);
      this.messageService.add({ 
        severity: 'success', 
        summary: 'Success', 
        detail: `You have added ${employee.username}`, 
        life: 3000 
      });
      this.navigateToList();
    }
  }

}
