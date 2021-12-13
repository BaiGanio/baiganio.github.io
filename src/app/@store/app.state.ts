import { UserView } from "../@modules/users/models/user-view";
import { Audit } from "../@shared/models/audit/audit.model";
import { Blogger } from '../@modules/bloggers/models/blogger.model';
import { Tutorial } from "../@shared/models/tutorial.model";


export interface AppState {
    readonly user: UserState;
    readonly loading: boolean;
    readonly blogger: BloggerState;
    readonly history: HistoryState;
    readonly tutorial: Tutorial[];
}

export const userFeatureKey = 'user';
export interface UserState { user: UserView | null }

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
