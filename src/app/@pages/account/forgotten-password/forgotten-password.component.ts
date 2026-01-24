import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../@core/angular-material.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgotten-password',
  standalone:true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule, RouterLink, TranslateModule],
  templateUrl: './forgotten-password.component.html',
  styleUrl: './forgotten-password.component.scss',
})
export class ForgottenPasswordComponent implements OnInit {
    forgotPassForm!: FormGroup; 
    resetPasswordErrorFlag = false; 
    resetPasswordErrorMessage = ''; 
    successFlag = false; 
    constructor(private fb: FormBuilder, public translate: TranslateService) { } 
    ngOnInit(): void { 
      this.forgotPassForm = this.fb.group({ 
            email: ['', [Validators.required, Validators.email]] }); } 
            sendResetLink(formValue: any) { const { email } = formValue; 
            // Simulate API 
        const success = true; if (!success) { 
          this.resetPasswordErrorFlag = true; 
          this.resetPasswordErrorMessage = 'Something went wrong!'; 
          return; 
        } 
        this.successFlag = true;
    } 
  dismiss() { this.resetPasswordErrorFlag = false; this.successFlag = false; }
}
