import { CoursePreviewModel } from '../../courses/models/course-preview-model.module';

export class TeacherPreviewModel {
    Id: string;
    Email: string;
    Image: string;
    Name: string;
    UserId: string;
    AccrNumber: string;
    Status: string;
    CreatedOn: Date;
    ModifiedOn: Date;
    Courses: Array<CoursePreviewModel>;
    Stars: number;

    constructor(
        id?: string, email?: string, image?: string,
        name?: string, userId?: string, accrNumber?: string, status?: string,
        createdOn?: Date, modifiedOn?: Date, courses?: Array<CoursePreviewModel>,
        stars?: number
    ) {
        this.Id = id;
        this.Email = email;
        this.Image = image;
        this.Name = name;
        this.UserId = userId;
        this.AccrNumber = accrNumber;
        this.Status = status;
        this.CreatedOn = createdOn;
        this.ModifiedOn = modifiedOn;
        this.Courses = courses;
        this.Stars = stars;

    }

}
