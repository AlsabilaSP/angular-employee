import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Employee } from '../../models/employee.model';

@Component({
  standalone: false,
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  selectedEmployee!: Employee | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeSvc: EmployeeService,
    private confirmationService: ConfirmationService,
  ) { 
    this.route.params.subscribe((param) => {
      this.selectedEmployee = this.employeeSvc.getEmployeeById(param['id']);
    });
  }

  ngOnInit(): void {
    if (!this.selectedEmployee) {
      this.router.navigate(['/employee-list']);
    }
  }

  navigateToList() {
    this.router.navigate(['/employee-list']);
  }

  navigateToEdit() {
    if (this.selectedEmployee) {
      this.router.navigate(['/employee-list/edit/' + this.selectedEmployee.id]);
    }
  }

}
