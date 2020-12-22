import { Component, OnInit } from '@angular/core';
import { CoursePreviewModel } from '../../models/course-preview-model.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  loading = false;
  isCourseDetails = false;
  courseId: any;
  courses = new Array<CoursePreviewModel>();

  constructor(
    // private courseService: CoursesService,
    //           private errorHandlerService: ErrorHandlerService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.courseId = this.route.snapshot.params.id;
      this.showCourseDetails(this.courseId);
    } else {
      if (this.courses.length === 0) {
        this.getCoursesPriview();
      }
    }
  }

  getCoursesPriview() {
    this.loading = true;
    // this.courseService.getCoursesByUserId().subscribe(response => {
    //   response.body.forEach(element => {
    //     const c = {
    //       Id: element.courseId,
    //       Name: element.courseName,
    //       Teachers: element.teachers,
    //       Description: element.description,
    //       StartDate: element.start_date,
    //       EndDate: element.end_date,
    //       ModifiedOn: element.modified_on,
    //       Image: element.image,
    //       IsActive: element.active,
    //       EnrolledStudents: element.enrolled_students
    //     };
    //     this.courses.push(c as CoursePreviewModel);
    //   });
    // },
    // error => {
    //   this.errorHandlerService.handleRequestError(error);
    //   this.loading = false;
    // },
    // () => { this.loading = false; });
  }

  showCourseDetails(courseId: string): void {
    console.log(courseId);
    this.router.navigate(['/courses/preview', courseId]);  
  }
}
