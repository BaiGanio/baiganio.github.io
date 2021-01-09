import { UserViewModel } from "../@modules/users/models/user-view-model.module";

export interface UserState {
    readonly selectedUser: UserViewModel;
}

export interface AppState {
    readonly user: UserState;
    readonly loading: boolean;
}
