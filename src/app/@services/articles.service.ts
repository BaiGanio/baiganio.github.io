import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
@Injectable()
export class ArticlesService {

  constructor(private backendService: BackendService) { }

  getAll(): Observable<any> {
    return this.backendService.backendRequest('get', 'articles', null);
  }
  getBloggerArticles(): Observable<any> {
    return this.backendService.backendRequest('get', 'articles/getByToken', null, true);
  }
  getById(id: string): Observable<any> {
    return this.backendService.backendRequest('get', 'articles/' + id, null, false);
  }
  getByTitle(title: string): Observable<any> {
    return this.backendService.backendRequest('get', 'articles/getByTitle?title=' + title, null, false);
  }
  create(title: string): Observable<any> {
    return this.backendService.backendRequest('post', 'articles/create', {title:title}, true);
  }
  delete(id: string): Observable<any> {
    return this.backendService.backendRequest('delete', 'articles/' + id, null, true);
  }
}
