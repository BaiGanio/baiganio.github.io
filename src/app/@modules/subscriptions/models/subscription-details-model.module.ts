import { UserViewModel } from '../../users/models/user-view-model.module';

export class SubscriptionDetailsModel {
    Id: string;
    Type: string;
    CreatedOn: Date;
    ExpiredOn: Date;
    ModifiedOn: Date;
    IsActive: boolean;
    Image: string;
    QuickInfo: string;
    Users: Array<UserViewModel>;

    constructor(id?: string, type?: string, createdOn?: Date, expiredOn?: Date,
                modifiedOn?: Date, isActive?: boolean, image?: string,
                quickInfo?: string, users?: Array<UserViewModel>) {
        this.Id = id;
        this.Type = type;
        this.CreatedOn = createdOn;
        this.ExpiredOn = expiredOn;
        this.ModifiedOn = modifiedOn;
        this.IsActive = isActive;
        this.Image = image;
        this.QuickInfo = quickInfo;
        this.Users = users;
    }
}
