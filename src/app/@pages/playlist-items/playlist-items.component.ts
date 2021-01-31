import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { YouTubeService } from 'src/app/@services/youtube.service';
import { environment } from 'src/environments/environment';
import { PlaylistItem } from './models/playlist-item.model';

@Component({
  selector: 'app-playlist-items',
  templateUrl: './playlist-items.component.html',
  styleUrls: ['./playlist-items.component.scss']
})
export class PlaylistItemsComponent implements OnInit {
  playListItems = new Array<PlaylistItem>();
  loading = false;
  constructor(
    private youTubeService: YouTubeService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute
  ) { }

  apiLoaded = false;
  ngOnInit(): void {
    this.loading = true;
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.route.queryParams.subscribe(params => {
      let playlistId = params.playlistId;

      this.youTubeService.getPlaylistItems(playlistId).subscribe(response => {
        if (environment.env === 'local') {
          response.body.forEach((element: any) => {
            this.playListItems.push(element as PlaylistItem);
          });
        }
        else {
          response.body.items.forEach((element: any) => {
            let playlistItem = new PlaylistItem();
            playlistItem.id = element.snippet.resourceId.videoId;
            playlistItem.description = element.snippet.description;
            playlistItem.title = element.snippet.title;
            playlistItem.publishedAt = element.snippet.publishedAt;
            playlistItem.imgUrl = element.snippet.thumbnails.standard.url;

            this.playListItems.push(playlistItem);
          });
        }
      },
        error => {
          this.errorHandlerService.handleRequestError(error);
          this.loading = false;
        }, () => { this.loading = false; });
    });
  }

  openPlaylistItem(videoId: string) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }

}
