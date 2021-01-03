import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { YouTubeService } from 'src/app/@services/youtube.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos =  new Array<any>();
  loading = false;
  constructor(
    private youTubeService: YouTubeService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.youTubeService.getPlaylists().subscribe(response => {
      response.body.forEach((element: any) => {
        this.videos.push(element);
      });
    },
     error => {
       this.errorHandlerService.handleRequestError(error);
       this.loading = false;
    }, () => { this.loading = false; console.log(this.videos)});
  }

}
