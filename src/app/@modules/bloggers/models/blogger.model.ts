export class Blogger {

    Id: string;
    UserId: string;
    Email: string;
    FirstName: string;
    LastName: string;
    Nickname: string;
    IsActive: boolean;
    ImgUrl: string;
    AvatarUrl: string;
    Posts: Object[];
    CreatedOn: Date;
    ModifiedOn: Date;
  
    constructor(id?: string, userId?: string, email?: string,
        firstname?: string, lastname?: string, nickname?: string,
        isActive?: boolean,  posts?: Object[],
        imgUrl?: string, avatarUrl?: string,
        createdOn?: Date, modifiedOn?: Date) {
        this.Id = id;
        this.UserId = userId;
        this.Email = email;
        this.FirstName = firstname;
        this.LastName = lastname;
        this.Nickname = nickname;
        this.IsActive = isActive;
        this.ImgUrl = imgUrl;
        this.AvatarUrl = avatarUrl;
        this.Posts = posts;
        this.CreatedOn = createdOn;
        this.ModifiedOn = modifiedOn;
    }
  }