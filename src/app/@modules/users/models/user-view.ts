import { UserSubscriptionPreview } from "./user-subscription-preview";

export class UserView {

    Id: string;
    Email: string;
    FirstName: string;
    LastName: string;
    IsEmailConfirmed: boolean;
    TypeOfUser: any;
    CreatedOn: Date;
    ModifiedOn: Date;
    LeadSource: any;
    ImgUrl: string;
    Subscriptions: UserSubscriptionPreview[];
    Roles: Object[];
    Data: Object;
  
    constructor(id?: string, email?: string,
        firstname?: string, lastname?: string, isEmailConfirmed?: boolean,
        typeOfUser?: any, createdOn?: Date, modifiedOn?: Date, leadSource?: any,
        image?: string, roles?: Object[], subscriptions?: UserSubscriptionPreview[],
        data?: Object) {
        this.Id = id;
        this.Email = email;
        this.FirstName = firstname;
        this.LastName = lastname;
        this.IsEmailConfirmed = isEmailConfirmed;
        this.TypeOfUser = typeOfUser;
        this.CreatedOn = createdOn;
        this.ModifiedOn = modifiedOn;
        this.LeadSource = leadSource;
        this.ImgUrl = image;
        this.Roles = roles;
        this.Subscriptions = subscriptions;
        this.Data = data;
    }
  }