import { StudentPreviewModel } from '../../students/models/student-preview-model.module';

export class CourseDetailsModel {

    Id: string;
    Name: string;
    Description: string;
    TeacherName: string;
    CreatedOn: Date;
    StartDate: Date;
    EndDate: Date;
    Image2Base64: string;
    Students: Array<StudentPreviewModel>;
    IsActive: boolean;
    TotalUsers: number;

    constructor(id?: string, name?: string, description?: string,
                teacherName?: string, createdOn?: Date, startDate?: Date,
                endDate?: Date, img2base64?: string, students?: Array<StudentPreviewModel>,
                isActive?: boolean, totalUsers?: number) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.TeacherName = teacherName;
        this.CreatedOn = createdOn;
        this.StartDate = startDate;
        this.EndDate = endDate;
        this.Image2Base64 = img2base64;
        this.Students = students;
        this.IsActive = isActive;
        this.TotalUsers = students.length > 0 ? students.length : 0;
    }
}
