import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { YouTubeService } from 'src/app/@services/youtube.service';
import { environment } from 'src/environments/environment';
import { ChannelPlaylist } from './models/channel-playlist.model';

@Component({
  selector: 'app-playlists',
  template:
  `
    <ngx-loading [show]="loading"></ngx-loading>
    <h1 class="title">Playlists</h1>   
    <hr>  
    <br>
    <h1 class="wait-fetching" *ngIf='loading'>Please wait!<br>Fetching data from the server...</h1>
    <div class="row text-center">
        <div *ngFor='let playList of playLists' class="col-md-6">
            <div class="card">
                <div class="card-body">             
                    <img src='{{ playList.imgUrl }}' class="img-thumbnail img-fluid" alt="Sample image">    
                    <br><br>                   
                    <h3>{{ playList.title }}</h3>
                    <hr> 
                    <h5>Published @ {{ playList.publishedAt | date :'dd-MMMM-yyyy' }}</h5>
                    <br>
                    <button 
                        mat-raised-button
                        color="primary" (click)="openPlayList(playList.id)">
                        <i class="fas fa-search"></i>
                    </button> 
                </div>    
            </div>   
        </div>
    </div>  
  `,
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playLists = new Array<ChannelPlaylist>();
  loading = false;
  constructor(
    private youTubeService: YouTubeService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    this.youTubeService.getPlaylists().subscribe(response => {
      if (environment.env === 'local') {
        response.body.forEach((element: any) => {
          this.playLists.push(element as ChannelPlaylist);
        });
      }
      else {
        response.body.items.forEach((element: any) => {
          let chanelPlaylist = new ChannelPlaylist();
          chanelPlaylist.id = element.id;
          chanelPlaylist.description = element.snippet.description;
          chanelPlaylist.title = element.snippet.title;
          chanelPlaylist.publishedAt = element.snippet.publishedAt;
          chanelPlaylist.imgUrl = element.snippet.thumbnails.standard.url;

          this.playLists.push(chanelPlaylist);
        });
      }
    },
      error => {
        this.errorHandlerService.handleRequestError(error);
        this.loading = false;
      }, () => { this.loading = false; });
  }

  openPlayList(id: string) {
    this.router.navigate(['/playlist-items'], { queryParams: { playlistId: id } });
  }

}
