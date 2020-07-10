export class NotificationViewModel {

    Id: string;
    UserId: string;
    BaseMethod: string;
    CreatedOn: string;
    Message: string;
    EmailType: string;
    NotificationsModel: any;
    RequestParams: string;
    ResponseParams: string;
    Service: string;
    TracingStatus: string;


    constructor(id?: string, userId?: string, baseMethod?: string,
                createdOn?: string, message?: string, emailType?: string, notificationsModel?: any,
                requestParams?: string, responseParams?: string, service?: string, tracingStatus?: string ) {
        this.Id = id;
        this.UserId = userId;
        this.BaseMethod = baseMethod;
        this.CreatedOn = createdOn;
        this.Message = message;
        this.EmailType = emailType;
        this.NotificationsModel = notificationsModel;
        this.RequestParams = requestParams;
        this.ResponseParams = responseParams;
        this.Service = service;
        this.TracingStatus = tracingStatus;
    }
}
