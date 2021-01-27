import { UserView } from "../@modules/users/models/user-view";
import { Audit } from "../@shared/models/audit/audit.model";

export interface AppState {
    readonly user: UserState;
    readonly history: HistoryState;
    readonly loading: boolean;
}

export const userFeatureKey = 'user';

export interface UserState {
    selectedUser: UserView | null;
}

export const historyFeatureKey = 'history';
export interface HistoryState {
    users: Audit[];
    subscriptions: Audit[];
    courses: Audit[];
}
