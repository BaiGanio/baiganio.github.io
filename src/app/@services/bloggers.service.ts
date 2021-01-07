import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';

@Injectable()
export class BloggersService {

  constructor(private backendService: BackendService) { }

  getBloggers(): Observable<any> {
    return this.backendService.backendRequest('get', 'Bloggers', null);
  }
  getById(id): Observable<any> {
    return this.backendService.backendRequest('get', 'Bloggers/' + id, null);
  }
//   getCourseProgress(courseId: string): Observable<any> {
//     return this.backendService.backendRequest('get', 'Courses/Progress/' + courseId, null, true);
//   }
//   createCourse(data: any): Observable<any> {
//     return this.backendService.backendRequest('post', 'Courses/Create', data, true);
//   }
//   updateCoursePicture(data: any): Observable<any> {
//     return this.backendService.backendRequest('post', 'Courses/UpdateCoursePicture', data, true);
//   }
}
