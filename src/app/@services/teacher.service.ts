import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable()
export class TeacherService {

    constructor(private backendService: BackendService) { }

    getTeachers(): Observable<any> {
        return this.backendService.backendRequest('get', 'Teachers', null, true);
    }

    getTeacherById(teacherId: any): Observable<any> {
        return this.backendService.backendRequest('get', 'Teachers/' + teacherId);
    }

    addTeacher2Course(data: any): Observable<any> {
        return this.backendService.backendRequest('post', 'Teachers/AddTeacherCourse', data, true);
    }

    voteForTeacher(data: any): Observable<any> {
        return this.backendService.backendRequest('post', 'Students/Vote4Teacher', data, true);
    }
}
