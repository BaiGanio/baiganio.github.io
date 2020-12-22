export class ServerErrorModel {
    ErrorText: string;
    StackTrace: string;
    Message: string;
    Name: string;
    OK: boolean;
    Status: number;
    StatusText: string;
    Url: string;

    constructor(error?: any) {
        let err = error.error;
        this.ErrorText = err?.error;
        this.StackTrace = err?.stackTrace;
        this.Message = error.message;
        this.Name = error.name;
        this.OK = error.ok;
        this.Status = error.status;
        this.StatusText = error.statusText;
        this.Url = error.url;
    }
}
