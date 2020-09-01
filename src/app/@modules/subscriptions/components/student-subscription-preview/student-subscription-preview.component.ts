import { Component, OnInit } from '@angular/core';
import { StudentPreviewModel } from 'src/app/@modules/students/models/student-preview-model.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/@services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SubscriptionService } from 'src/app/@services/subscription.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { UserDataService } from 'src/app/@services/user-data.service';

@Component({
  selector: 'app-student-subscription-preview',
  templateUrl: './student-subscription-preview.component.html',
  styleUrls: ['./student-subscription-preview.component.scss']
})
export class StudentSubscriptionPreviewComponent implements OnInit {
  subscriptions: any;
  subscription: any;
  title: 'Edit Student Info';
  loading = false;
  name: string;
  student: any;

  studentForm: FormGroup;
  studentInfo = new StudentPreviewModel();
  notificationFlagUpdateInfo = false;
  errMsg = '';
  specialityList = ['Software Technologies & Design', 'Software Engeneering', 'Informatics', 'BIT', 'ITMOM', 'MI', 'MIIT'];
  groupsList = ['1A', '1B', '2A', '2B', '3A', '3B'];
  routeData: string[];

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private subscriptionService: SubscriptionService,
    private errorHandlerService: ErrorHandlerService,
    private userService: UserDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.studentForm = this.formBuilder.group({
      // Validations
      university: [null, Validators.required],
      gitHubProfileUrl: [null, Validators.required],
      facultyNumber: [null, Validators.required],
      speciality: [null, Validators.required],
      studentGroup: [null],
      studentYearOfStudy: [null],
      studentYearOfGraduating: [null]
    });
  }

  ngOnInit() {
    this.loading = true;
    // this.getUserByToken();
    this.getUserSubscriptions();
  }

  getUserByToken() {
    this.studentService.getStudent()
      .subscribe(
        response => {
          this.handleSuccess(response);
        },
        error => {
          this.handleError(error);
        },
        () => { this.loading = false; }
      );
  }

  handleSuccess(response): void {
    this.loading = false;
    this.student = response.body;
    console.log(this.student);
    this.userService.setUserData(this.student);
    this.clearForm();
  }

  handleError(error): void {
    this.loading = false;
    this.errorHandlerService.handleRequestError(error);
  }

  clearForm() {
    this.studentForm.patchValue({
        university: this.student.university,
        gitHubProfileUrl: this.student.github_profile_url,
        facultyNumber: this.student.faculty_number,
        speciality: this.student.specialty
    });
}

  private getUserSubscriptions() {
    this.subscriptionService.getUserActiveSubscriptions()
      .subscribe(
        response => {
          this.subscriptions = response.body;
          console.log(this.subscriptions);
          this.subscriptions.forEach(element => {
            if (element.type === 'Student') {
              this.subscription = element;
            }
          });
        },
        error => {
          this.errorHandlerService.handleRequestError(error);
        },
        () => {
          this.loading = false;
        }
      );
  }

  updateStudent() {
    this.loading = true;
    this.studentInfo.GitHubProfileUrl = this.studentForm.value.gitHubProfileUrl;
    this.studentInfo.University = this.studentForm.value.university;
    this.studentInfo.FacultyNumber = this.studentForm.value.facultyNumber;
    this.studentInfo.Speciality = this.studentForm.value.speciality;
    // this.studentInfo.Group = this.studentForm.value.studentGroup;
    // this.studentInfo.YearOfStudy = this.studentForm.value.studentYearOfStudy;
    // this.studentInfo.YearOfGraduating = this.studentForm.value.studentYearOfGraduating;

    console.log(this.studentInfo);
    this.studentService.updateStudent(this.studentInfo).subscribe(
      response => { },
      error => {
       // this.processError(error);
        this.studentForm.markAsPristine();
        this.studentForm.markAsUntouched();
        this.loading = false;
      },
      () => {
        this.notificationFlagUpdateInfo = true;
        this.studentForm.markAsPristine();
        this.studentForm.markAsUntouched();
        this.loading = false;
        setTimeout(() => {
          this.notificationFlagUpdateInfo = false;
        }, 3500);
      }
    );
  }
}
