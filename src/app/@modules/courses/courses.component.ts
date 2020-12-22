import { Component, OnInit } from '@angular/core';
import { CoursePreviewModel } from './models/course-preview-model.module';
import { CoursePreviewComponent } from './components/course-preview/course-preview.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/@services/courses.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { StudentService } from 'src/app/@services/student.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  loading = false;
  isStudent = false;
  flagEnrollSuccess = false;
  msgLogIn = '';
  fetchingMsg = '';
  msgIncompleteStudent = '';
  totalStudents = 0;
  courseId: any;
  enrolledCourse: any;
  courses = new Array<any>();
  // coursesWithUserIds = new Array<CourseWithEnrolledUserIds>();
  storedUser: any;
  // student = new StudentPreviewModel();

  constructor(
    private courseService: CoursesService,
    private studentService: StudentService,
    // private authService: AuthService,
    // private userDataService: UserDataService,
    private errorHandlerService: ErrorHandlerService,
    private dialog: MatDialog,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
     this.loading = true;
    // if (this.authService.isAuthenticated()) {
    //   this.storedUser = this.userDataService.getUserData();
    //   if (this.storedUser) {
    //       this.storedUserInit();
    //   }
    //   this.getCoursesWithEnrolledUserId();
    // } else {

    //   
    // }
    this.getInitCourses();

  }

  getCoursesWithEnrolledUserId() {
    // this.courseService.getCoursesWithEnrolledUserId().subscribe(response => {
    //   response.body.forEach(element => {
    //     const c = {
    //       Id: element.id,
    //       Name: element.name,
    //       Teachers: element.teachers,
    //       Description: element.description,
    //       StartDate: element.startDate,
    //       EndDate: element.endDate,
    //       ModifiedOn: element.modifiedOn,
    //       Image: element.image,
    //       IsActive: element.isActive,
    //       IsElectable: element.isElectable,
    //       EnrolledStudents: element.totalEnrolledStudents,
    //       EnrolledUserId: element.enrolledUserId
    //     };
    //     this.courses.push(c as CoursePreviewModel);
    //   });
    // },
    // error => { this.errorHandlerService.handleRequestError(error); this.loading = false; },
    // () => { this.loading = false; });
  }

  getInitCourses() {
    this.courseService.getCoursesPreview().subscribe(response => {
      response.body.forEach(element => {
        const c = {
          Id: element.id,
          Name: element.name,
          Teachers: element.teachers,
          Description: element.description,
          StartDate: element.startDate,
          EndDate: element.endDate,
          ModifiedOn: element.modifiedOn,
          Image: element.image,
          IsActive: element.isActive,
          IsElectable: element.isElectable,
          EnrolledStudents: element.enrolledStudents,
          EnrolledUserId: element.enrolledUserId
        };
        this.courses.push(c as CoursePreviewModel);
      });
    },
     error => {
       this.errorHandlerService.handleRequestError(error);
       this.loading = false;
    }, () => { this.loading = false; });
  }

  private storedUserInit() {
    // this.userDataService.getUserByToken().subscribe(
    //     response => {
    //         const u = {
    //             Id: response.body.id,
    //             Username: response.body.username,
    //             Subscriptions: response.body.subscriptions,
    //             Roles: response.body.roles
    //         };
    //         this.storedUser = u as UserViewModel;
    //         this.userDataService.setUserData(this.storedUser);
    //     },
    //     error => {
    //         this.errorHandlerService.handleRequestError('myahah' + error);
    //     }, () => { this.loading = false; }
    // );
}

  isEnrolled(cId: string): boolean {
    let result = false;
    // this.courses.forEach(element => {
    //   if (cId === element.Id && element.EnrolledUserId === this.storedUser.Id) {
    //     console.log('found');
    //     console.log(this.storedUser.Id);
    //     result = true;
    //     return true;
    //   }
    // });
    return result;
  }

  enroll4course(courseId: string) {
    this.loading = true;
    let course: any;
    this.courses.forEach( (element) => {
      if (element.Id === courseId) {
        course = element;
      }
    });
    this.studentService.enroll4Course({
        CourseId: course.Id,
        CourseName: course.Name,
        Image: course.Image
      })
      .subscribe(
        () => {},
        error => {
          this.errorHandlerService.handleRequestError(error);
          this.loading = false;
        },
        () => {
          this.loading = false;
          this.snackbar.open('Enrollment successful !', 'X', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: 'successSnackbar'
          });
          this.flagEnrollSuccess = true;
        }
    );
  }

  getCoursePreview(courseId: string) {
    let course: CoursePreviewModel;
    this.courses.forEach( (element) => {
        if (element.Id === courseId) {
          course =
            new
              CoursePreviewModel(
                element.Id,
                element.Name,
                element.Description,
                element.Teachers,
                element.StartDate,
                element.EndDate,
                element.ModifiedOn,
                element.IsActive,
                element.IsElectable,
                element.Image,
                element.EnrolledStudents
              );
        }
    });
    const $dialogRef =
        this.dialog.open(
            CoursePreviewComponent,
            {
              width: '80vw',
              maxHeight: '100vh',
              data: { model: course }
            }
        );
    $dialogRef.afterClosed().subscribe();
  }

  backToCourses() {
    setTimeout(() => {
      location.reload();
    }, 10);
  }

  goToCourse(courseId: string) {
    this.router.navigate(['/courses/preview/' + courseId]);
  }

  goToMyCourses() {
    this.router.navigate(['/courses/preview']);
  }
}
