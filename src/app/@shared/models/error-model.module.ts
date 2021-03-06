export class ErrorModel {
    ErrorText: string;
    ErrorDescription: string;
    Message: string;
    Name: string;
    OK: boolean;
    Status: number;
    StatusText: string;
    Url: string;

    constructor(error?: any) {
        let err = error.error;
        this.ErrorText = err?.error;
        this.ErrorDescription = err?.error_description || err;
        this.Message = error.message;
        this.Name = error.name;
        this.OK = error.ok;
        this.Status = error.status;
        this.StatusText = error.statusText;
        this.Url = error.url;
    }
}
