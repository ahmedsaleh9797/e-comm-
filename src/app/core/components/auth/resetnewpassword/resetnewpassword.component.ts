import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetnewpassword',
  imports: [ReactiveFormsModule],
  templateUrl: './resetnewpassword.component.html',
  styleUrl: './resetnewpassword.component.scss',
})
export class ResetnewpasswordComponent {
isLoading() {
throw new Error('Method not implemented.');
}
  resetNewPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{7,20}$/),
    ]),
  });
  errMsg: WritableSignal<string> = signal<string>('');
  isloading: WritableSignal<boolean> = signal<boolean>(false);
  authservice: AuthService = inject(AuthService);
  router: Router = inject(Router);
logInForm: any;
  submitResetNewPasswordForm() {
   

   if (this.resetNewPasswordForm.valid) {
      this.isloading.set(true);

    this.authservice.resetNewPassword(this.resetNewPasswordForm.value).subscribe({
      next: res => {
        console.log(res);
        this.isloading.set(false);
        localStorage.setItem('userToken', res.token);
        this.authservice.decodeUserData();
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.errMsg.set(err.error.message);
        this.isloading.set(false);
        console.log(this.errMsg());
      },
    });
  }
}
}
