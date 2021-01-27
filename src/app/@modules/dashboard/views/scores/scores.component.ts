import { Component, OnInit } from '@angular/core';
import { UserView } from 'src/app/@modules/users/models/user-view';
import { CoursePreviewModel } from 'src/app/@modules/courses/models/course-preview-model.module';
import { StudentService } from 'src/app/@services/student.service';
import { CoursesService } from 'src/app/@services/courses.service';
import { StudentPreviewModel } from 'src/app/@modules/students/models/student-preview-model.module';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
  storedUser = new UserView();
  student = new StudentPreviewModel();
  courses = new Array<CoursePreviewModel>();
  studentCourses = new Array<CoursePreviewModel>();

  public chartOptions: any = {
    responsive: true
  };
  public chartType = 'pie';
  // public chartData: Array<any> = [300, 50, 100];
  public chartData: Array<any> = [1, 1, 1];
  public chartLabels: Array<any> = ['Standalone work', 'Current Exams', 'Final Exam'];
  public chartColors: Array<any> = [{
      hoverBorderColor: [
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)'
      ],
      hoverBorderWidth: 0,
      backgroundColor: [
        '#6bbaea', // blue
        '#30e542', // green
        '#f7f438', // yellow
        '#949FB1',
        '#4D5360'
      ],
      hoverBackgroundColor: ['#1c7ded', '#09c40c', '#fcf40f', '#A8B3C5', '#616774']
  }];

  constructor(public courseService: CoursesService,
              public studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudent().subscribe(
      response => {
        this.proccessResponse(response);
      },
      error => {
        // this.loading = false;
        // console.log(error);
      },
      () => {
       // this.loading = false;
       // console.log(this.student);
      }
    );

    // this.courseService.getCourses().subscribe(
    //   response => {
    //     response.body.forEach(element => {
    //       const c = {
    //         Id: element.id,
    //         Name: element.name,
    //         Teaches: element.teaches,
    //         Description: element.description,
    //         StartDate: element.start_date,
    //         EndDate: element.end_date,
    //         CreatedOn: element.created_on,
    //         Image2Base64: element.image,
    //         Students: element.students as Array<StudentPreviewModel>,
    //         IsActive: element.is_active,
    //         TotalUsers: element.students.length
    //       };
    //       if (c.IsActive) {
    //         this.courses.push(c as CoursePreviewModel);
    //       }
    //     });
    //     // console.log(this.courses);
    //   },
    //   error => {
    //     // this.loading = false;
    //     // console.log(error);
    //   },
    //   () => { }
    // );



  }

  proccessResponse(response) {
    this.student = response.body;
    // console.log(this.student.Courses);
  }

  isStudentCourse(courseId) {
    // console.log(this.student);
    const jo = this.student.Courses as Array<CoursePreviewModel>;
    jo.forEach(element => {
      // console.log(element);
      // let jo = element.courseId;
      // if (jo === courseId) {
      //   return true;
      // }
      // return false;
    });
    return false;
  }


  public getStudentWebhookUrl(students): string {
    let jo = '';
    students.forEach(element => {
      if (element.studentId === this.student.Id) {
        // console.log(this.student['webhookUrls'][0]);
        jo =  this.student.WebhookUrls[0] as string;
        return jo;
      }
    });
    return jo;
  }
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
