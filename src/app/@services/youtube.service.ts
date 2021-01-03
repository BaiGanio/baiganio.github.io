import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable()
export class YouTubeService {

    constructor(private backendService: BackendService) { }

    getPlaylists(): Observable<any> {
        return this.backendService.backendRequest('get', 'statistics/playlists', null, false);
    }
}
