import { NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bg-team',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './bg-team.component.html',
  styleUrl: './bg-team.component.scss',
})
export class BgTeamComponent {
bloggers = new Array<GH>();
  blogger:any;
  loading= false;
  names = [
    'tatyana144',
    'deivid7007',
    'cvetina97',
    'Sunkatta',
    'SelinSeid',
    'baiganio',
    'HaiveroV',
    'monyou',
    'nemss'
  ];
  constructor(
    private httpClient: HttpClient,
    //private errorService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.names.forEach(name => {
      this.getUser(name);      
    });
  }

  getUser(name: string){
    this.sendGetRequest(name).subscribe((response: GH) => {
      console.log(response);
      this.bloggers.push(response);
    }, 
      (    error: any) => {  },
    () => {this.loading = false;}
    )
  }
  sendGetRequest(name: string): Observable<any>{
    return this.httpClient.get(`https://api.github.com/users/${name}`);
  }
  goToLink(login: string){
    window.open(`https://github.com/${login}`, "_blank");
  }
}



export class GH{
  login: string = '';
  name: string = '';
  avatar_url: string = '';
}
