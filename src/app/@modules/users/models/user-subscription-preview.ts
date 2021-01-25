export class UserSubscriptionPreview {

    Id: string;
    Type: string;
    isActive: boolean;
    ImgUrl: string;
    Status: string;
    IsEmailConfirmed: boolean;
    CreatedOn: Date;
    ModifiedOn: Date;
  
    constructor(id?: string, type?: string, isActive?: boolean, imgurl?: string,
        status?: string, createdOn?: Date, modifiedOn?: Date) {
        this.Id = id;
        this.Type = type;
        this.isActive = isActive;
        this.ImgUrl = imgurl;
        this.Status = status;
        this.CreatedOn = createdOn;
        this.ModifiedOn = modifiedOn;
    }
  }