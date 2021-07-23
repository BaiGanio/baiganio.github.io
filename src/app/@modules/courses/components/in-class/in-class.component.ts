import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentLoginViewModel } from '../../models/student-login-view-model.module';
import { StudentService } from 'src/app/@services/student.service';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
@Component({
  selector: 'app-in-class',
  templateUrl: './in-class.component.html',
  styleUrls: ['./in-class.component.scss']
})
export class InClassComponent implements OnInit {
    weekNo: any;
    ipInfo: any;
    message = '';
    errMsg = '';
    loading = false;
    studentLogins = new Array<StudentLoginViewModel>();
    student: any;
    isLetMeInActive = true;
    courseStartDate = new Date();
    courseEndDate = new Date();

    constructor(
        private http: HttpClient,
        private studentService: StudentService,
        private errorHandlerService: ErrorHandlerService
    ) { }

    ngOnInit() {
        this.loading = true;
        this.getStudentLogins();
        this.studentService.getStudent().subscribe(
            response => {
                this.student = response.body; // as StudentViewModel;
                this.loading = false;
            },
            error => {
                // this.loading = false;
                this.message = error.error;
                console.log(this.message);
            },
            () => {
                 this.getStudentLogins();
            }
        );
    }


    getStudentLogins() {
        this.studentService.getStudentLogins().subscribe(
            response => {
                response.body.forEach(element => {
                    const c = {
                    Id: element.id,
                    StudentId: element.sudentId,
                    Ip: element.ip,
                    Week: element.week,
                    IsCalculated: element.isCalculated,
                    LastLoginDate: element.lastLoginDate,
                    IPStack: element.ipStack
                    };
                    this.studentLogins.push(c as StudentLoginViewModel);
                });
            },
            error => {
                this.loading = false;
                this.message = error.error;
                console.log(this.message);
            },
            () => {
                this.loading = false;
                this.proccessLoginsResponse();
            }
        );
    }

    proccessLoginsResponse() {
        if (this.studentLogins.length === 0) {
            this.isLetMeInActive = true;
        }
    }

    trackIP() {
        this.loading = true;
        this.http.get(environment.IPCheckingServiceUrl).subscribe(
            data => {
                console.log(data);
                this.ipInfo = data;
                console.log(this.ipInfo);
            },
            error => {
                this.errMsg = error.error;
                console.log(this.errMsg);
                this.loading = false;
            },
            () => { this.loading = false; this.proccessIP(); }
        );
    }

    proccessIP() {
        this.studentService.letMeIn({CourseId: "", IP: this.ipInfo.ip}).subscribe(
            response => { },
            error => {
                this.errMsg = error.error;
                this.errorHandlerService.handleRequestError(error);
                this.loading = false;
            },
            () => {
                this.isLetMeInActive = false;
                this.loading = false;
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        );
    }

    processError() {
        // $('#errMsg').toggleClass('d-none');
        //     setTimeout(() => {
        //         this.errMsg = '';
        //         $('#errMsg').toggleClass('d-none');
        //     }, 3500);
    }
}

