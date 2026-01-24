import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from '../../@core/angular-material.module';
import { FooterComponent } from '../../@components/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterOutlet, RouterModule, TranslateModule, AngularMaterialModule, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  storedUser: any;
  reportIssueModalVisibility = false;
  locationData: any;
  welcomeText = '';
  constructor(public translate: TranslateService) { 
    translate.addLangs(['en', 'bg']); 
    translate.setFallbackLang('en'); 
    const saved = localStorage.getItem('lang'); 
    translate.use(saved || 'en'); 
  }

  ngOnInit() {
    // if (this.authService.isAuthenticated()) {
    //   this.userDataService.getUserByToken().subscribe(
    //     response => {
    //       this.storedUser = response.body;
    //       this.userDataService.setUserData(this.storedUser);
    //     },
    //     err => { console.log(err); },
    //     () => {
    //       this.storedUser = this.userDataService.getUserData();
    //     }
    //   );
    // }
  }
  switchLang(lang: string) { this.translate.use(lang); localStorage.setItem('lang', lang); }
  isUserLogged(): boolean {
    return false;
    //return this.authService.isAuthenticated();
  }

  logOut() {
    // this.userDataService.logout();
    // this.router.navigate(['/login']);
  }
}
