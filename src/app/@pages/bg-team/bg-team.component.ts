import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BloggersService } from 'src/app/@services/bloggers.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-bg-team',
  templateUrl: './bg-team.component.html',
  styleUrls: ['./bg-team.component.scss']
})
export class BgTeamComponent implements OnInit {
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
    private errorService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.names.forEach(name => {
      this.getUser(name);      
    });
  }

  getUser(name: string){
    this.sendGetRequest(name).subscribe(response => {
      this.bloggers.push(response);
    }, 
    error => { this.errorService.handleRequestError(error); },
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
  login:'';
  name:'';
  avatar_url:'';
}