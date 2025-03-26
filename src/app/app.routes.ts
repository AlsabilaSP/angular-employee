import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RedirectGuard } from './core/guards/redirect.guard'; // New guard

export const routes: Routes = [
  { path: '', pathMatch: 'full', canActivate: [RedirectGuard], component: LoginComponent }, // Handles default route
  { path: 'login', component: LoginComponent, canActivate: [RedirectGuard] }, // Prevent access if logged in
  {
    path: 'employee-list',
    loadChildren: () => import('./features/employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [AuthGuard] // Protect Employee Module
  },
  { path: '**', redirectTo: '' } // Catch-all redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }