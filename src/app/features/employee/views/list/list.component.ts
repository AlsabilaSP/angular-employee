import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Employee } from '../../models/employee.model';

@Component({
  standalone: false,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  searchInput: string = '';

  constructor(
    private employeeSvc: EmployeeService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) { }

  get employees$() {
    return this.employeeSvc.employees$;
  }
  
  confirmEdit(event: Event, emp: Employee) {
    event.stopPropagation();
    this.confirmationService.confirm({
        target: event.currentTarget as EventTarget,
        message: `Are you sure you want to edit ${emp.username}?`,
        icon: 'pi pi-exclamation-triangle',
        rejectButtonProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptButtonProps: {
            label: 'Edit',
            severity: 'warn'
        },
        accept: () => {
          // TODO: routing ke employee edit
        },
    });
  }

  confirmDelete(event: Event, emp: Employee) {
    event.stopPropagation();
    this.confirmationService.confirm({
        target: event.currentTarget as EventTarget,
        message: `Are you sure you want to delete ${emp.username}?`,
        icon: 'pi pi-exclamation-triangle',
        rejectButtonProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptButtonProps: {
            label: 'Delete',
            severity: 'danger'
        },
        accept: () => {
            this.messageService.add({ 
              severity: 'error', 
              summary: 'Deleted', 
              detail: `You have deleted ${emp.username}`, 
              life: 3000 
            });
            this.employeeSvc.deleteEmployee(emp.id);
        },
    });
}

}
