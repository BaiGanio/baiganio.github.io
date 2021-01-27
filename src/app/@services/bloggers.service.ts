import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
import { Blogger } from '../@modules/bloggers/models/blogger.model';

@Injectable()
export class BloggersService {

  constructor(private backendService: BackendService) { }

  getBloggers(): Observable<any> {
    return this.backendService.backendRequest('get', 'Bloggers', null);
  }
  getById(id): Observable<any> {
    return this.backendService.backendRequest('get', 'Bloggers/' + id, null);
  }
  getByToken(): Observable<any> {
    return this.backendService.backendRequest('get', 'Bloggers/GetByUserId', null, true);
  }
  update(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Bloggers/Update', data, true);
  }
//   updateCoursePicture(data: any): Observable<any> {
//     return this.backendService.backendRequest('post', 'Courses/UpdateCoursePicture', data, true);
//   }
}
