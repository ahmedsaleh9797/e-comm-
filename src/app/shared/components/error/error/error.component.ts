import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective } from '@angular/forms';
import { ValidationPipe } from './../../../pipes/validation/validation-pipe';

@Component({
  selector: 'app-error',
  imports: [ ValidationPipe],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  
})
export class ErrorComponent {
 @Input() control!: FormControl | AbstractControl 
  @Input() errorMessages!: any

  constructor(public formDirective:FormGroupDirective){
  }
}
