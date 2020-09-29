// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { CoursePreviewModel } from 'src/app/@modules/courses/models/course-preview-model.module';
// import { CoursesService } from 'src/app/@services/courses.service';
// import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
// import { EditCourseComponent } from '../../components/edit-course/edit-course.component';
// import { EditCourseModel } from 'src/app/@modules/courses/models/edit-course.model';
// import { DeleteCourseComponent } from '../../components/delete-course/delete-course.component';
// import { CreateCourseComponent } from '../../components/create-course/create-course.component';
// import { TeacherService } from 'src/app/@services/teacher.service';

// @Component({
//     selector: 'app-courses-details',
//     templateUrl: './courses-details.component.html',
//     styleUrls: ['./courses-details.component.scss']
// })
// export class CoursesDetailsComponent implements OnInit {
//     displayedColumns: string[] =
//     [
//       '#', 'Id', 'Name',
//       'Start Date', 'End Date',
//       'Active', 'Electable',
//       'Enrolled Students', 'Pending Enroll Requests',
//       'Teachers', 'Properties'
//     ];
//   public dataSource: MatTableDataSource<CoursePreviewModel>;
//   courses = new Array<CoursePreviewModel>();
//   loading = false;
//   expandedElement: CoursePreviewModel | null;
//   totalCourses = 0;

//   constructor(
//     private coursesService: CoursesService,
//     private errorHandlerService: ErrorHandlerService,
//     private dialog: MatDialog,
//     private snackbar: MatSnackBar,
//     private teacherService: TeacherService
//   ) { }
  

//   @ViewChild(MatPaginator, null) paginator: MatPaginator;
//   @ViewChild(MatSort, null) sort: MatSort;

//   ngOnInit(): void {
//     this.getCourses();
//   }

//   // Search in data table based on the input fields that're used from filters group
//   applyFilter() {
//     const teacherNameFilterValue = ( document.querySelector('#teacherNameFilter') as HTMLInputElement).value;
//     const courseNameFilterValue = ( document.querySelector('#courseNameFilter') as HTMLInputElement).value;

//     this.dataSource.filterPredicate = (data, filter) =>
//       (
//         // data.TeacherName.trim().toLowerCase().indexOf(filter.split('┼')[0]) !== -1 &&
//         data.Name.trim().toLowerCase().indexOf(filter.split('┼')[1]) !== -1
//       );

//     this.dataSource.filter =
//     `${teacherNameFilterValue.trim().toLowerCase()}┼${courseNameFilterValue.trim()}`;

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   createCourse() {
//     const $dialogRef =
//       this.dialog.open(
//         CreateCourseComponent,
//         { width: '50vw' }
//       );

//     this.tryCreateCourse($dialogRef);
//   }

//   editCourse(courseId: string) {
//     this.coursesService.getCourseById(courseId).subscribe(course => {
//       const $dialogRef = this.openEditCourseModal(course);
//       this.tryUpdateCourse($dialogRef, courseId);
//     });
//   }

//   deleteCourse(courseId: string) {
//     const $dialogRef =
//       this.dialog.open(
//         DeleteCourseComponent, {
//           data: {
//             title: `This will delete course with Id ${courseId}!`,
//             confirmText: 'Delete',
//             rejectText: 'Dismiss',
//             model: courseId
//           }
//         }
//       );

//     this.tryDeleteCourse($dialogRef, courseId);
//   }

//   deleteAllCourses() {
//     const $dialogRef = this.dialog.open(DeleteCourseComponent, {
//       data: {
//         title: 'This will delete all courses!',
//         confirmText: 'Delete All',
//         rejectText: 'Dismiss'
//       }
//     });

//     this.tryDeleteAllCourses($dialogRef);
//   }

//   private getCourses() {
//     this.loading = true;
//     this.coursesService.getCoursesPreview().subscribe(response => {
//       response.body.forEach(element => {
//         const c = {
//           Id: element.id,
//           Name: element.name,
//           Teachers: element.teachers,
//           Description: element.description,
//           StartDate: element.start_date,
//           EndDate: element.end_date,
//           ModifiedOn: element.modified_on,
//           Image: element.image,
//           IsActive: element.is_active,
//           IsElectable: element.is_electable,
//           EnrolledStudents: element.enrolled_students,
//           EnrolledUserId: element.enrolled_user_id
//         };
//         this.courses.push(c as CoursePreviewModel);
//       });
//       this.dataSource = new MatTableDataSource(this.courses);
//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort = this.sort;

//       this.loading = false;
//     }, err => {
//       this.errorHandlerService.handleRequestError(err);
//       this.loading = false;
//     },
//     () => { this.totalCourses = this.courses.length; });
//   }

//   private openEditCourseModal(course: any) {
//     return this.dialog.open(EditCourseComponent, {
//       width: '80vw',
//       maxHeight: '100vh',
//       data: {
//         model:
//           new CoursePreviewModel(
//             course.body.id,
//             course.body.name,
//             course.body.description,
//             course.body.teachers,
//             course.body.start_date,
//             course.body.end_date,
//             course.body.modified_on,
//             course.body.is_electable,
//             course.body.is_active,
//             course.body.image,
//             course.body.enrolled_students,
//           )
//       },
//       autoFocus: false
//     });
//   }

//   private tryUpdateCourse($dialogRef, courseId: string) {
//     this.loading = true;
//     $dialogRef.afterClosed()
//     .subscribe(
//       response => {
//         if (response) {
//           if (Object.values(response).includes('updateCourseInfo')) {
//             this.updateCourseInfo(response.course);
//           } else if (Object.values(response).includes('updateCoursePicture')) {
//             this.updateCoursePicture(response.img2base64, courseId);
//           } else if (Object.values(response).includes('addTeacher2Course')) {
//             this.addTeacherCourse(response.teacher, courseId);
//           }
//         }
//       }
//     );
//     this.loading = false;
//   }

//   private updateCourseInfo(course: EditCourseModel) {
//     this.coursesService.updateCourse({
//       CourseId: course.CourseId,
//       Name: course.Name,
//       Description: course.Description,
//       IsActive: course.IsActive,
//       StartDate: course.StartDate,
//       EndDate: course.EndDate,
//       // Teachers: course.Teachers
//     })
//     .subscribe(success => {
//       // update course in table
//       this.loading = true;
//       this.handleSuccess(course.CourseId);
//     }, error => {
//       this.handleError(error);
//     });
//   }

//   private updateCoursePicture(image2base64: string, courseId: string) {
//     this.coursesService.updateCoursePicture({
//       CourseId: courseId,
//       ImageAsBase64: image2base64
//     })
//     .subscribe(
//       () => {
//         this.handleSuccess(courseId);
//       }, error => {
//         this.handleError(error);
//       }
//     );
//   }

//   addTeacherCourse(teacher, courseId: string) {
//     this.teacherService.addTeacher2Course({
//       TeacherId: teacher.id,
//       UserId: teacher.userId,
//       AccrNumber: teacher.accrNumber,
//       CourseId: courseId
//     })
//     .subscribe(
//       () => {
//         this.handleSuccess(courseId);
//       }, error => {
//         this.handleError(error);
//       }
//     );
//   }

//   private handleSuccess(courseId: string) {
//     // const teachers = new Array<string>();
//     // updateCourseEntry.Teachers.forEach(element => {
//     //   teachers.push(element.FirstName + ' ' + element.LastName);
//     // });
//     this.coursesService.getCourseById(courseId)
//     .subscribe(
//       response => {
//         const editedCourse = new CoursePreviewModel(
//           response.body.id,
//           response.body.name,
//           response.body.description,
//           response.body.teachers,
//           response.body.start_date,
//           response.body.end_date,
//           response.body.modified_on,
//           response.body.is_active,
//           response.body.is_electable,
//           response.body.image,
//           response.body.enrolled_students
//         );
//         this.courses.splice(
//           this.courses.findIndex(u => u.Id === courseId),
//           1,
//           editedCourse
//         );
//         this.dataSource.data = this.courses;
//         this.loading = false;
//         // show info
//         this.snackbar.open('Course with ID: ' + editedCourse.Id + ' updated successfully.', 'OK', {
//           duration: 3000,
//           horizontalPosition: 'right',
//           verticalPosition: 'top',
//           panelClass: 'successSnackbar'
//         });
//       }
//     );
//   }

//   private handleError(error: any) {
//     this.errorHandlerService.handleRequestError(error);
//     this.loading = false;
//     // show info
//     this.snackbar.open('Course cannot be updated!', 'OK', {
//       duration: 3000,
//       horizontalPosition: 'right',
//       verticalPosition: 'top',
//       panelClass: 'dangerSnackbar'
//     });
//   }

//   private tryDeleteCourse($dialogRef, courseId: string) {
//     $dialogRef.afterClosed()
//     .subscribe(response => {
//       if (response) {
//         this.loading = true;
//         this.coursesService.deleteCourse({
//           CourseId: courseId
//         })
//           .subscribe(
//             success => {
//               this.loading = false;
//               this.courses = new Array<CoursePreviewModel>();
//               this.getCourses();
//               this.snackbar.open('Course was deleted successfuly!', 'X', {
//                 duration: 3000,
//                 horizontalPosition: 'right',
//                 verticalPosition: 'top',
//                 panelClass: 'successSnackbar'
//             });
//           }, error => {
//             this.errorHandlerService.handleRequestError(error);
//             this.loading = false;
//           }, () => { this.loading = false; }
//         );
//       }
//     });
//   }

//   private tryDeleteAllCourses($dialogRef) {
//     $dialogRef.afterClosed()
//     .subscribe(response => {
//       if (response) {
//         this.coursesService.deleteAllCourses()
//         .subscribe(
//           success => {
//             this.loading = true;
//             this.courses = new Array<CoursePreviewModel>();
//             this.getCourses();
//             // show info
//             this.snackbar.open('All courses deleted successfully.', 'X', {
//               duration: 3000,
//               horizontalPosition: 'right',
//               verticalPosition: 'top',
//               panelClass: 'successSnackbar'
//             });
//           }, error => {
//             this.errorHandlerService.handleRequestError(error);
//             this.loading = false;
//           },
//           () => { this.loading = false; }
//         );
//       }
//     });
//   }

//   private tryCreateCourse($dialogRef) {
//     $dialogRef.afterClosed()
//     .subscribe(response => {
//       if (response) {
//         this.coursesService.createCourse({
//             Name: response.Name
//         }).subscribe(
//             res => {
//                 this.loading = false;
//                 this.courses = new Array<CoursePreviewModel>();
//                 this.getCourses();
//                 this.snackbar.open(
//                 `${res}`,
//                 'X', {
//                     duration: 3000,
//                     horizontalPosition: 'center',
//                     verticalPosition: 'top',
//                     panelClass: 'successSnackbar'
//                 });
//             },
//             error => {
//                 this.loading = false;
//                 this.errorHandlerService.handleRequestError(error);
//             }
//         );
//     }});
//   }
// }
