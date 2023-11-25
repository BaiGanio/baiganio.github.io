import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CoursesService {

  constructor(private backendService: BackendService, private http: HttpClient) { }

  deleteAllCourses(): Observable<any> {
    return this.backendService.backendRequest('get', 'Admin/DeleteAllCourses', null, true);
  }
  getCoursesPreview(): Observable<any> {
    //return this.backendService.backendRequest('get', 'Courses', null, false);
    return this.http.get(`${environment.apiUrl}` + 'courses');
  }
  getCoursesByUserId(): Observable<any> {
    return this.backendService.backendRequest('get', 'Courses/ByUserId', null, true);
  }
  getCourseById(id: string): Observable<any> {
    return this.backendService.backendRequest('get', 'Courses/' + id, null, false);
  }
  getCoursesWithEnrolledUserId(): Observable<any> {
    return this.backendService.backendRequest('get', 'Courses/WithUserId', null, true);
  }
  getCourseProgress(courseId: string): Observable<any> {
    return this.backendService.backendRequest('get', 'Courses/Progress/' + courseId, null, true);
  }
  createCourse(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Courses/Create', data, true);
  }
  updateCourse(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Courses/Update', data, true);
  }
  updateCoursePicture(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Courses/UpdateCoursePicture', data, true);
  }
  deleteCourse(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Courses/Delete', data, true);
  }
}
