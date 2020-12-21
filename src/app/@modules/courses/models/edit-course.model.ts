export class EditCourseModel {
    CourseId: string;
    Name: string;
    Description: string;
    IsActive: boolean;
    StartDate: Date;
    EndDate: Date;
    Teachers: any;

    constructor(id?: string, name?: string, description?: string, isActive?: boolean,
                startDate?: Date, endDate?: Date, teachers?: any) {
        this.CourseId = id;
        this.Name = name;
        this.Description = description;
        this.IsActive = isActive;
        this.StartDate = startDate;
        this.EndDate = endDate;
        this.Teachers = teachers;
    }
}
