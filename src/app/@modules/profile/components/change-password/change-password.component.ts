import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { UtilityService } from 'src/app/@services/utility.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  loading = false;
  changePassFG: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    private formBuilder: FormBuilder,
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.changePassFG =
      this.formBuilder.group({
        Password: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(50)]],
        PassConfirm: ['', [Validators.required]]
      },
        { validator: this.utilityService.mustMatchFormValidator('Password', 'PassConfirm') });
  }

  changePass() {
    this.loading = true;
    const entry = { Password: this.changePassFG.value.Password };
    this.dialogRef.close(entry);
    this.loading = false;
  }

  cancelChange() {
    this.dialogRef.close();
  }
}
