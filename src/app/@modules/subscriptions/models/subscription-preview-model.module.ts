export class SubscriptionPreviewModel {
    Id: string;
    Type: string;
    IsActive: boolean;
    Image: string;
    Description: string;
    TotalSubscribers: number;
    ConfirmedSubscribers: number;
    PendingSubscribers: number;
    CancelledSubscribers: number;
    CreatedOn: Date;
    ModifiedOn: Date;

    constructor(
        id?: string,
        type?: string,
        description?: string,
        isActive?: boolean,
        image?: string,
        totalSubscribers?: number,
        confirmedSubscribers?: number,
        pendingSubscribers?: number,
        cancelledSubscribers?: number,
        createdOn?: Date,
        modifiedOn?: Date
    ) {
        this.Id = id;
        this.Type = type;
        this.IsActive = isActive;
        this.Image = image;
        this.TotalSubscribers = totalSubscribers;
        this.ConfirmedSubscribers = confirmedSubscribers;
        this.PendingSubscribers = pendingSubscribers;
        this.CancelledSubscribers = cancelledSubscribers;
        this.Description = description;
        this.CreatedOn = createdOn;
        this.ModifiedOn = modifiedOn;
    }
}
