export class  CoursePreviewModel {

    Id: string;
    Name: string;
    Description: string;
    Teachers: Array<string>;
    StartDate: Date;
    EndDate: Date;
    ModifiedOn: Date;
    IsActive: boolean;
    IsElectable: boolean;
    ImgUrl: string;
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
        imgUrl?: string,
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
        this.ImgUrl = imgUrl;
        this.EnrolledStudents = enrolledStudents;
        this.EnrolledUserId = enrolledUserId;
    }
}
