import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { TermsComponent } from 'src/app/@shared/components/terms/terms.component';
// import { PrivacyComponent } from 'src/app/@shared/components/privacy/privacy.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentApplicationVersion = 7;
  constructor(private dialog: MatDialog,  private router: Router,) { }

  ngOnInit() {
    console.log('Lifecycle methods should not be empty');
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
  goToBGTeam(){
    this.router.navigate(['/bg-team']);
  }
}
