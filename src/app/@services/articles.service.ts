import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
@Injectable()
export class ArticlesService {

  constructor(private backendService: BackendService) { }

  getArticles(): Observable<any> {
    return this.backendService.backendRequest('get', 'Articles', null);
  }
  getArticleById(id: string): Observable<any> {
    return this.backendService.backendRequest('get', 'Articles/' + id, null, false);
  }
  getArticleByTitle(id: string): Observable<any> {
    return this.backendService.backendRequest('get', 'Articles/GetByTitle?title=' + id, null, false);
  }
}
