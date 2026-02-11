import { authGuard } from './../../../guards/auth/auth-guard';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { ResetcodeComponent } from '../resetcode/resetcode.component';

@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule,ResetcodeComponent],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss',
})
export class ForgetpasswordComponent {
  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  errMsg: WritableSignal<string> = signal<string>('');
  isloading: WritableSignal<boolean> = signal<boolean>(false);
  authservice: AuthService = inject(AuthService);
  forgetPasswordFlag:boolean =true ;
  resetCodeFlag : boolean = false ;
  submitForgetPasswordForm() {
    if (this.isloading() || this.forgetPasswordForm.invalid) {
      this.forgetPasswordForm.markAllAsTouched();

      return;
    }

    this.isloading.set(true);

    this.authservice.forgetPassword(this.forgetPasswordForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.isloading.set(false); 
        this.forgetPasswordFlag = false ;
        this.resetCodeFlag  = true ; 
      },
      error: (err) => {
        this.errMsg.set(err.error.message);
        this.isloading.set(false);
        console.log(this.errMsg());
      },
    });
  }
}
