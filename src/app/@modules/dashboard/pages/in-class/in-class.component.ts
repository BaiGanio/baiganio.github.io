// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import * as $ from 'jquery';
// import { StudentPreviewModel } from 'src/app/@modules/students/models/student-preview-model.module';
// import { StudentService } from 'src/app/@services/student.service';
// import { environment } from '../../../../../environments/environment';
// import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

// @Component({
//   selector: 'app-in-class',
//   templateUrl: './in-class.component.html',
//   styleUrls: ['./in-class.component.scss']
// })
// export class InClassComponent implements OnInit {
//     weekNo: any;
//     ipInfo: any;
//     message = '';
//     errMsg = '';
//     loading = false;
//     isLetMeInActive = true;
//     student = new StudentPreviewModel();
//     studentLogins = new Array<any>();
//     courseStartDate = new Date();
//     courseEndDate = new Date();
//     constructor(private studentService: StudentService,
//                 private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

//     ngOnInit() {
//         this.loading = true;
//         this.studentService.getStudent().subscribe(
//             response => {
//                 this.student = response.body as StudentPreviewModel;
//                 console.log(this.student);
//             },
//             error => {
//                 this.loading = false;
//                 this.errorHandlerService.handleRequestError(error);
//             },
//             () => {
//                 this.getStudentLogins();
//             }
//         );
//     }


//     getStudentLogins() {
//         this.studentService.getStudentLogins().subscribe(
//             response => {
//                 response.body.forEach(element => {
//                     const c = {
//                     Id: element.id,
//                     StudentId: element.sudentId,
//                     Ip: element.ip,
//                     Week: element.week,
//                     IsCalculated: element.isCalculated,
//                     LastLoginDate: element.lastLoginDate,
//                     IPStack: element.ipStack
//                     };
//                     this.studentLogins.push(c);
//                 });
//                 console.log(this.studentLogins);
//                 this.loading = false;
//                 this.proccessLoginsResponse();
//             },
//             error => {
//                 this.loading = false;
//                 this.errorHandlerService.handleRequestError(error);
//             }
//         );
//     }

//     proccessLoginsResponse() {
//         if (this.studentLogins.length === 0) {
//             this.isLetMeInActive = true;
//         }
//     }

//     trackIP() {
//         this.loading = true;
//         this.http.get(environment.IPCheckingServiceUrl).subscribe(
//             data => {
//                 this.ipInfo = data;
//                 this.proccessIP();
//             },
//             error => {
//                 this.loading = false;
//                 this.errorHandlerService.handleRequestError(error);
//             }
//         );
//     }

//     proccessIP() {
//         console.log(this.ipInfo);
//         console.log({StudentId: this.student.Id, IP: this.ipInfo });
//         this.studentService.letMeIn({StudentId: this.student.UserId, IP: this.ipInfo}).subscribe(
//             response => { },
//             error => {
//                 this.loading = false;
//                 this.errorHandlerService.handleRequestError(error);
//             },
//             () => {
//                 this.isLetMeInActive = false;
//                 this.loading = false;
//                 setTimeout(() => {
//                     location.reload();
//                 }, 2000);
//             }
//         );
//     }

//     processError() {
//         $('#errMsg').toggleClass('d-none');
//         setTimeout(() => {
//                 this.errMsg = '';
//                 $('#errMsg').toggleClass('d-none');
//             }, 3500);
//     }
// }

