import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { DownloadModalComponent } from '../../@components/download-modal/download-modal.component';
import { GeoLocationService } from '../../@services/geo-location.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule],
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
constructor(private dialog: MatDialog, private geoLocation: GeoLocationService) {}

  ngOnInit() {
    this.loading = true;
    this.geoLocation.getLocation().subscribe(data => { 
      this.locationData = data; 
      console.log('User location:', data); 
    });
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
}
