import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DownloadModalComponent } from '../../@components/download-modal/download-modal.component';
import { GeoLocationService } from '../../@services/geo-location.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { StoredCoursesService } from '../../@services/stored-courses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
loading = false;
isFlipped = false;
flip1 = false;
flip2 = false;
flip3 = false;
locationData: any;
images: any[] = [];
flipStates: boolean[] = [];


constructor(
  private dialog: MatDialog, 
  private geoLocation: GeoLocationService, 
  public translate: TranslateService,
private storedCourses: StoredCoursesService
) {}

  ngOnInit() {
    this.loading = true;
    // this.geoLocation.getLocation().subscribe(data => { 
    //   this.locationData = data; 
    //   console.log('User location:', data); 
    // });
    this.images = this.storedCourses.getStoredCourses(); 
    this.flipStates = this.images.map(() => false);
  }
  openEmailModal() {
    const dialogRef = this.dialog.open(DownloadModalComponent, { 
      width: '550px', 
      disableClose: false,
      data: this.locationData ??  { ip: '127.0.0.1' }
    }); 
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User submitted email:', result); 
        // handle email here 
      } 
    }); 
  }
  toggleFlip(i: number) { 
    this.flipStates[i] = !this.flipStates[i]; 
  }
}
