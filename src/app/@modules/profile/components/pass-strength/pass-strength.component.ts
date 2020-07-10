import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pass-strength',
  templateUrl: './pass-strength.component.html',
  styleUrls: ['./pass-strength.component.scss']
})
export class PassStrengthComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PassStrengthComponent>) { }

  ngOnInit() {}

}
