import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { log } from 'console';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginFg = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    success: new FormControl(true)
  })
  matcher = new MyErrorStateMatcher();
  hide = signal(true);

  constructor(private router: Router) {}
  
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onLogin() {
    // hardcoded username and password: both alsafrontend
    const { username, password } = this.loginFg.value;
    this.loginFg.get('success')?.setValue(username === "alsafrontend" && password === "alsafrontend");

    const { success } = this.loginFg.value;
    if (success) {
      sessionStorage.setItem('isLoggedIn', 'true'); // Store login status
      this.router.navigate(['/employee-list']); // Redirect to Employee List
    }
  }
}
