import { UserView } from "../@modules/users/models/user-view";
import { Audit } from "../@shared/models/audit/audit.model";
import { Blogger } from '../@modules/bloggers/models/blogger.model';


export interface AppState {
    readonly user: UserState;
    readonly blogger: BloggerState;
    readonly history: HistoryState;
    readonly loading: boolean;
}

export const userFeatureKey = 'user';
export interface UserState { selectedUser: UserView | null }

export const bloggerFeatureKey = 'blogger';
export interface BloggerState {
    blogger: Blogger | null;
    bloggers: ReadonlyArray<Blogger>;
    collection: ReadonlyArray<string>;
}

export const historyFeatureKey = 'history';
export interface HistoryState {
    users: Audit[];
    subscriptions: Audit[];
    courses: Audit[];
    bloggers: Audit[];
}
