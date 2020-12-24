import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
// import { TermsComponent } from 'src/app/@shared/components/terms/terms.component';
// import { PrivacyComponent } from 'src/app/@shared/components/privacy/privacy.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {  
  currentApplicationVersion = environment.version;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  
  getPrivacy() {
    // const $dialogRef =
    // this.dialog.open(
    //   PrivacyComponent,
    //   {  width: '80vw', maxHeight: '100vh'}
    // );
    // $dialogRef.afterClosed().subscribe();
  }
  getTerms() {
    // const $dialogRef =
    // this.dialog.open(
    //   TermsComponent,
    //   {  width: '80vw', maxHeight: '100vh'}
    // );
    // $dialogRef.afterClosed().subscribe();
  }
}
