export class BadRequestModel {
    ErrorText: any;
    ErrorDescription: any;
    StackTrace: string;
    Message: string;
    Name: string;
    OK: boolean;
    Status: number;
    StatusText: string;
    Url: string;

    constructor(error?: any) {
        this.ErrorText = error.error.error || error.error;
        this.ErrorDescription = error.error.error_description;
        this.Message = error.message;
        this.Name = error.name;
        this.OK = error.ok;
        this.Status = error.status;
        this.StatusText = error.statusText;
        this.Url = error.url;
    }
}
