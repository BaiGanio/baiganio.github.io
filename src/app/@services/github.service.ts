import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';

@Injectable()
export class GitHubService {

  constructor(private backendService: BackendService) { }

  deleteAllCourses(): Observable<any> {
    return this.backendService.backendRequest('get', 'Admin/DeleteAllCourses', null, true);
  }
  getBloggers(): Observable<any> {
    return this.backendService.backendRequest('get', 'Bloggers', null);
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
