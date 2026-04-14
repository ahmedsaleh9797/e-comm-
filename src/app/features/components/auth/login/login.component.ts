import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, RouterLink, } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { ErrorComponent } from "@shared/components/error/error/error.component";
import { catchError, finalize, tap, throwError } from 'rxjs';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, ErrorComponent,],  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  
})
export class LoginComponent {

   validationMessages = {
    email: 
    { 
      required: 'Email is required', 
      email:'Please provide valid email'
    },
    password : 
    {
 required: 'Password is required', 
pattern : 'password not valid'

    }
     
  }

  private authService: AuthService = inject(AuthService); 
  private formBuilder: FormBuilder = inject(FormBuilder);

  private router: Router = inject(Router);
  errMsg: WritableSignal<string> = signal<string>('');
  isLoading: WritableSignal<boolean> = signal<boolean>(false);
  logInForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{7,20}$/)]],
  })
 

  submitLoginForm() {
  
    if(this.logInForm.invalid){
      this.logInForm.markAllAsTouched()
      return
    }
      this.authService.logIn(this.logInForm.value).pipe(
        tap(_=>  this.isLoading.set(true)),
        catchError((err: any) => {
  this.errMsg.set(err.error.message);
  console.log(this.errMsg());
  return throwError(() => err); 
}),
        finalize(()=>  this.isLoading.set(false)),


      ).subscribe({

        next: res => {
          localStorage.setItem('userToken', res.token)
          this.authService.decodeUserData();
          this.router.navigate(['home'])
        },






      })


    }

   
  }


