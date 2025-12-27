import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  // currentApplicationVersion = environment.version;
  constructor(private router: Router) { }

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
  goToBGTeam(){
    this.router.navigate(['/bg-team']);
  }
}
