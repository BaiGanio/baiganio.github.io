import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { TeacherService } from 'src/app/@services/teacher.service';
import { TeacherPreviewModel } from './models/teacher-preview.model';
import { Router } from '@angular/router';
import { CoursePreviewModel } from '../courses/models/course-preview-model.module';
import { TeacherPreviewComponent } from './component/teacher-preview/teacher-preview.component';
import { VoteForTeacherComponent } from './component/vote-for-teacher/vote-for-teacher.component';
import { AuthService } from 'src/app/@services/auth.service';
import { UserDataService } from 'src/app/@services/user-data.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  loading = false;
  totalTeachers = 0;
  teachers = new Array<TeacherPreviewModel>();
  successfulUpdate = false;
  successfulUpdateMessage = '';
  isLogged = false;
  user: any;

  constructor(
    private dialog: MatDialog,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
    private teacherService: TeacherService,
    private authService: AuthService,
    private userService: UserDataService) { }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
    this.loading = true;
    this.getTeachers();
    this.getUserByToken();
  }

  getUserByToken() {
    this.userService.getUserByToken()
      .subscribe(
          response => {
              this.user = response;
              console.log(this.user);
          },
          error => {
              console.log(error);
          }
      );
  }

  goToTeacher(teacherId: string) {
    this.router.navigate(['/teachers/' + teacherId]);
  }

  notVotedYet(teacherId: string){
    let output = true;
    this.user.starredTeachers.forEach(element => {
      if(element.Id === teacherId ){
        output = false;
      }
    });

    return output;
  }

  showTeacher(teacherId: string) {
    let teacher: TeacherPreviewModel;
    this.teachers.forEach( (element) => {
        if (element.Id === teacherId) {
          teacher = element;
          return;  
        }
    });
    const $dialogRef =
        this.dialog.open(
            TeacherPreviewComponent,
            {
              width: '80vw',
              maxHeight: '100vh',
              data: { model: teacher }
            }
        );
    $dialogRef.afterClosed().subscribe();
  }

  voteForTeacher(teacherId: string){
    this.loading = true;
    let teacherName = "";
    this.teachers.forEach(element => {
      if(element.Id === teacherId){
        teacherName = element.Name;
        return;
      }
    });
    const $dialogRef =
      this.dialog.open(
        VoteForTeacherComponent, 
          {
           data:{
              width: '80vw',
              maxHeight: '100vh',
              model: {
                TeacherName: teacherName
            }
            }
          }
      );
    this.tryVoteForTeacher($dialogRef, teacherId);
    this.loading = false;
  }

  private tryVoteForTeacher($dialogRef, teacherId: string) {
    $dialogRef.afterClosed()
      .subscribe(
        response => {
          if(response === true){
            this.teacherService.voteForTeacher(
              {TeacherId : teacherId}
            )
            .subscribe(
              () => {
                let teacherName = "";
                  this.teachers.forEach(element => {
                    if(element.Id === teacherId){
                      teacherName = element.Name;
                      return;
                    }
                    
                  });
                this.loading = false;
                this.successfulUpdate = true;
                this.successfulUpdateMessage = `You have successfully starred ⭐ for ${teacherName}!`;
              }, 
              err => {
                this.loading = false;
                this.errorHandlerService.handleRequestError(err);
              }
            );
          }
        }
      );
  }

  getTeachers() {
    this.loading = true;
    this.teacherService.getTeachers()
      .subscribe(
        response => {
          response.body.forEach(element => {
            const c = {
              Id: element.id || '',
              Email: element.email,
              Image: element.image || '',
              Name: element.name || '',
              UserId: element.user_id || '',
              AccrNumber: element.accr_number,
              Status: element.status || '',
              CreatedOn: element.created_on || '',
              ModifiedOn: element.modified_on || '',
              Courses: element.courses as Array<CoursePreviewModel> || '',
              Stars: element.stars || 0
            };
            this.teachers.push(c as TeacherPreviewModel);
          });
        }, err => {
          this.errorHandlerService.handleRequestError(err);
        }, () => {
          this.totalTeachers = this.teachers.length;
          this.loading = false;
        }
      );
  }

  dismiss() {
    this.successfulUpdate = false;
  }
}
