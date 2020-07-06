export class StudentLoginViewModel {

    Id: string;
    StudentId: string;
    Ip: string;
    Week: string;
    IsCalculated: boolean;
    LastLoginDate: Date;
    IPStack: string;
    /**
     *
     */
    constructor(id?: string, studentId?: string, ip?: string, week?: string,
        isCalculated?: boolean, lastLogin?: Date, ipStack?: string) {
        this.Id = id;
        this.StudentId = studentId;
        this.Ip = ip;
        this.Week = week;
        this.IsCalculated = isCalculated;
        this.LastLoginDate = lastLogin;
        this.IPStack = ipStack;
    }
}
