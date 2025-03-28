import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { groupMockData } from '../../models/employee.mock';
import { Employee } from '../../models/employee.model';

@Component({
  standalone: false,
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  options: string[] = groupMockData.map(item => item.name);
  employeeFg = new FormGroup({
    id: new FormControl(this.generateUniqueId(), [Validators.required]),
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl(new Date(), [Validators.required]),
    basicSalary: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    group: new FormControl('', [Validators.required]),
    description: new FormControl(new Date(), [Validators.required]),
  });
  currentDate = new Date();
  selectedEmployee!: Employee | undefined;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeSvc: EmployeeService,
    private messageService: MessageService
  ) { 
    this.route.params.subscribe((param) => {
      this.selectedEmployee = this.employeeSvc.getEmployeeById(param['id']);
    });
  }

  ngOnInit(): void {
    if (!this.selectedEmployee) {
      this.router.navigate(['/employee-list']);
    } else {
      this.employeeFg.patchValue({
        ...this.selectedEmployee,
        birthDate: new Date(this.selectedEmployee.birthDate),
        description: new Date(this.selectedEmployee.description),
        basicSalary: this.selectedEmployee.basicSalary.toString()
      });
      console.log(this.employeeFg.value)
    }
  }

  navigateToList() {
    this.router.navigate(['/employee-list']);
  }

  private generateUniqueId(): string {
    return Math.floor(Math.random() * 100000).toString();
  }

  onSave() {
    if (this.employeeFg.valid) {
      const employee: Employee = {
        id: this.employeeFg.get('id')?.value || '',
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
      this.employeeSvc.editEmployee(employee);
      this.messageService.add({ 
        severity: 'success', 
        summary: 'Success', 
        detail: `You have updated ${employee.username}`, 
        life: 3000 
      });
      this.navigateToList();
    }
  }
}
