export class CoursePreviewModel {

    Id: string;
    Name: string;
    Description: string;
    Teachers: Array<string>;
    StartDate: Date;
    EndDate: Date;
    ModifiedOn: Date;
    IsActive: boolean;
    IsElectable: boolean;
    Image: string;
    EnrolledStudents: number;
    EnrolledUserId: string;

    constructor(
        id?: string,
        name?: string,
        description?: string,
        teachers?: Array<string>,
        startDate?: Date,
        endDate?: Date,
        modifiedOn?: Date,
        isActive?: boolean,
        isElectable?: boolean,
        image?: string,
        enrolledStudents?: number,
        enrolledUserId?: string
    ) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.Teachers = teachers;
        this.StartDate = startDate;
        this.EndDate = endDate;
        this.ModifiedOn = modifiedOn;
        this.IsActive = isActive;
        this.IsElectable = isElectable;
        this.Image = image;
        this.EnrolledStudents = enrolledStudents;
        this.EnrolledUserId = enrolledUserId;
    }
}
