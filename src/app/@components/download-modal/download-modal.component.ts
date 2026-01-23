import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularMaterialModule } from '../../@core/angular-material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-download-modal',
  imports: [FormsModule, AngularMaterialModule],
  templateUrl: './download-modal.component.html',
  styleUrl: './download-modal.component.scss',
})
export class DownloadModalComponent {
  city = '';
  ip = '';
  isActive = false;
  downloads = 0;

  constructor(private dialogRef: MatDialogRef<DownloadModalComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('Received data:', data);
    this.ip = data.ip;
    this.isActive = this.canDownload(this.ip);
  }

  submit() {
    console.log('ip submitted:', this.ip);
    const ip = this.ip;
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD 
    const stored = localStorage.getItem('1ManDownloadRateLimit'); 
    let data = stored ? JSON.parse(stored) : null; 
    if (!data || data.ip !== ip || data.date !== today) { 
      // New day or new IP → reset 
      data = { ip, date: today, count: 1 }; 
    } else { 
      // Same day + same IP → increment 
      data.count++; 
    } 
    localStorage.setItem('1ManDownloadRateLimit', JSON.stringify(data)); 

    this.dialogRef.close();
    console.log(data.count); 
  }
  canDownload(ip: string): boolean {
    const today = new Date().toISOString().split('T')[0];
    const stored = localStorage.getItem('1ManDownloadRateLimit');

    if (!stored) return true;

    const data = JSON.parse(stored);
     console.log(data); 
    this.downloads = data.count;
    // New day or new IP → allowed
    if (data.ip !== ip || data.date !== today) return true;

    // Same day + same IP → check count
    return data.count < 5;
  }
  getAttemptsMsg() {
    return this.isActive ? "Daily attempts: " + this.downloads + "/5" : "You reached the daily limit of 5 downloads.";
  }
}
