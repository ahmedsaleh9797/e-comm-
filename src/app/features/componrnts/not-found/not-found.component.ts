import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [ReactiveFormsModule],
  templateUrl:  './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotfoundComponent {

}
