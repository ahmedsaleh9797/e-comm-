import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { ResetnewpasswordComponent } from '../resetnewpassword/resetnewpassword.component';

@Component({
  selector: 'app-resetcode',
  imports: [ReactiveFormsModule,ResetnewpasswordComponent],
  templateUrl: './resetcode.component.html',
  styleUrl: './resetcode.component.scss',
})
export class ResetcodeComponent {
 resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{4,}$/)]),
  });
  errMsg: WritableSignal<string> = signal<string>('');
  isloading: WritableSignal<boolean> = signal<boolean>(false);
  authservice: AuthService = inject(AuthService);
  resetNewPasswordFlag:boolean =false ;
  resetCodeFlag : boolean = true ;
  submitResetCodeForm() {
    if (this.isloading() || this.resetCodeForm.invalid) {
      this.resetCodeForm.markAllAsTouched();

      return;
    }

    this.isloading.set(true);

    this.authservice.verifyResetCode(this.resetCodeForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.isloading.set(false); 
        this.resetCodeFlag  = false ; 
        this.resetNewPasswordFlag = true ;
      },
      error: (err) => {
        this.errMsg.set(err.error.message);
        this.isloading.set(false);
        console.log(this.errMsg());
      },
    });
  }
}


