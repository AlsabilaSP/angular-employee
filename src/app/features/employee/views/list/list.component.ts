import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  standalone: false,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  @ViewChild('dt2') dt2!: Table;  // Access PrimeNG table
  searchInput: string = '';
  selectedEmployee!: Employee;

  constructor(
    private router: Router,
    private employeeSvc: EmployeeService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) { }

  get employees$() {
    return this.employeeSvc.employees$;
  }

  ngOnInit(): void {
    // Retrieve stored filter from sessionStorage if available
    const savedFilter = sessionStorage.getItem('employeeFilter');
    if (savedFilter) {
      this.searchInput = savedFilter;
      setTimeout(() => {
        if (this.dt2) {
          this.dt2.filterGlobal(this.searchInput, 'contains');
        }
      });
    }
  }

  onSearchInputChange() {
    // Save to sessionStorage
    sessionStorage.setItem('employeeFilter', this.searchInput);

    // Apply filter if table is available
    if (this.dt2) {
      this.dt2.filterGlobal(this.searchInput, 'contains');
    }
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
          this.navigateToDetail(emp);
        },
    });
  }

  onClickRow() {
    this.navigateToDetail(this.selectedEmployee)
  }

  navigateToDetail(emp: Employee) {
    this.router.navigate(['/employee-list/detail/' + emp.id]);
  }

  navigateToAdd() {
    this.router.navigate(['/employee-list/add']);
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
            this.employeeSvc.deleteEmployee(emp.id);
            this.messageService.add({ 
              severity: 'error', 
              summary: 'Deleted', 
              detail: `You have deleted ${emp.username}`, 
              life: 3000 
            });
        },
    });
}

}
