import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BackendService } from './backend.service';

@Injectable()
export class YouTubeService {

    constructor(private backendService: BackendService, private http: HttpClient) { }

    getPlaylists(): Observable<any> {
        if (environment.env === 'local') {
            return this.backendService.backendRequest('get', 'statistics/playlists', null, false);
        }

        return this.http.get("https://www.googleapis.com/youtube/v3/playlists", { params: { key: environment.apiKeys.youtube, part: "snippet", channelId: "UCczegwwjd8YyeophFBIJ4EA" }, observe: 'response' })
    }

    getPlaylistItems(playlistId: string): Observable<any> {
        if (environment.env === 'local') {
            return this.backendService.backendRequest('get', `statistics/PlaylistItems?playlistId=${playlistId}`, null, false);
        }

        return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}`, { params: { key: environment.apiKeys.youtube, part: "snippet", channelId: "UCczegwwjd8YyeophFBIJ4EA" }, observe: 'response' })
    }
}
