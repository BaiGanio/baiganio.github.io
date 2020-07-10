import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService {

  constructor(private backendService: BackendService) { }

  letMeIn(data): Observable<any> {
    return this.backendService.backendRequest('post', 'Students/LetMeIn', data, true);
  }

  getStudentLogins(): Observable<any> {
    return this.backendService.backendRequest('get', 'Students/GetStudentLogins', null, true);
  }

  getStudentProgresses(): Observable<any> {
    return this.backendService.backendRequest('get', 'Students/GetStudentProgresses', null, true);
  }

  getStudent(): Observable<any> {
    return this.backendService.backendRequest('get', 'Students/GetByUserId', null, true);
  }

  getCoursesAndScores(): Observable<any> {
    return this.backendService.backendRequest('get', 'Students/GetCoursesAndScores', null, true);
  }

  updateStudent(data): Observable<any> {
    return this.backendService.backendRequest('post', 'Students/Update', data, true);
  }
  enroll4Course(data: any): Observable<any> {
    return this.backendService.backendRequest('post', 'Students/Enroll4Course', data, true);
  }

  getChartData() {
    return this.backendService.backendRequest('get', 'Fake/Chart');
  }
}
