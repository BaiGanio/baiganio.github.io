import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BloggerService } from 'src/app/@services/blogger.service';

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
    'baiganio'
  ];
  constructor(
    private httpClient: HttpClient
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
    error => { console.log(error); },
    () => {this.loading = false}
    )
  }
  sendGetRequest(name: string): Observable<any>{
    return this.httpClient.get(`https://api.github.com/users/${name}`);
  }
}

export class GH{
  name:'';
  avatar_url:'';
}