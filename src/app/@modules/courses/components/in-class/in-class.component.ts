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
        this.studentService.getStudent().subscribe(
            response => {
                this.student = response.body; // as StudentViewModel;
                this.loading = false;
            },
            error => {
                this.message = error.error;
                this.errorHandlerService.handleRequestError(error);
            },
            () => {
                 this.getStudentLogins();
            }
        );
    }


    getStudentLogins() {
        let rnd = 2;
        this.studentService.getStudentLogins().subscribe(
            response => {
                response.body.forEach(element => {
                  rnd++;
                  let vl = rnd > 3 || rnd >= 5;
                    const c = {
                    Id: element.id,
                    StudentId: element.sudentId,
                    Ip: element.ip,
                    Week: element.week,
                    IsCalculated: vl,
                    LastLoginDate: element.lastLoginDate,
                    IPStack: element.ipStack
                    };
                    this.studentLogins.push(c as StudentLoginViewModel);
                });
            },
            error => {
                this.loading = false;
                this.message = error.error;
                this.errorHandlerService.handleRequestError(error);
            },
            () => {
                this.loading = false;
                console.log(this.studentLogins);
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
                this.ipInfo = data;
                console.log(this.ipInfo);
            },
            error => {
                this.errMsg = error.error;
                this.errorHandlerService.handleRequestError(error);
                this.loading = false;
            },
            () => { this.loading = false; this.proccessIP(); }
        );
    }

    proccessIP() {
        this.studentService.letMeIn({CourseId: "1af2e4ef-4c22-4303-b558-9501341caf82", IP: this.ipInfo.ip}).subscribe(
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

