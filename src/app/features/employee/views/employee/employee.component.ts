import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  constructor(private router: Router) {}

  onLogout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
