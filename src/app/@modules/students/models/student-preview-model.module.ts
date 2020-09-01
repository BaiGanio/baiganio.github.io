import { CoursePreviewModel } from '../../courses/models/course-preview-model.module';

export class StudentPreviewModel {
  Id: string;
  UserId: string;
  SubscriptionId: string;
  Name: string;
  University: string;
  GitHubProfileUrl: string;
  FacultyNumber: string;
  Speciality: string;
  Group: string;
  YearOfStudy: number;
  YearOfGraduating: number;
  StudentStatus: boolean;
  IsCompleted: boolean;
  Courses: Array<CoursePreviewModel>;
  Progress: Object[];
  WebhookUrls: Object[];

  constructor(id?: string, userId?: string, subscriptionId?: string, name?: string, university?: string,
              gitHubProfileUrl?: string, facultyNumber?: string, speciality?: string, group?: string,
              yearOfStudy?: number, yearOfGraduating?: number, studentStatus?: boolean, isCompleted?: boolean,
              courses?: Array<CoursePreviewModel>, progress?: Object[], webhooks?: Object[]) {
        this.Id = id;
        this.UserId = userId;
        this.SubscriptionId = subscriptionId;
        this.Name = name;
        this.University = university;
        this.GitHubProfileUrl = gitHubProfileUrl;
        this.FacultyNumber = facultyNumber;
        this.Speciality = speciality;
        this.Group = group;
        this.YearOfStudy = yearOfStudy;
        this.YearOfGraduating = yearOfGraduating;
        this.StudentStatus = studentStatus;
        this.IsCompleted = isCompleted;
        this.Courses = courses;
        this.Progress = progress;
        this.WebhookUrls = webhooks;
  }
}
