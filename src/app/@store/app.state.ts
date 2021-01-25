import { UserView } from "../@modules/users/models/user-view";
import { Audit } from "../@shared/models/audit/audit.model";

export interface UserState {
    readonly selectedUser: UserView;
}
// export interface SubscriptionState {
//     readonly selectedSubscription: SubscriptionViewModel;
// }
// export interface BloggerState {
//     readonly selectedBlogger: BloggerViewModel;
// }
// export interface TeacherState {
//     readonly selectedTeacher: TeacherViewModel;
// }
// export interface StudentState {
//     readonly selectedStudent: StudentViewModel;
// }
export interface HistoryState {
    users: Audit[];
    subscriptions: Audit[];
    courses: Audit[];
}

export interface AppState {
    readonly user: UserState;
    // readonly subscription: SubscriptionState;
    // readonly blogger: BloggerState;
    // readonly teacher: TeacherState;
    // readonly student: StudentState;
    readonly history: HistoryState;
    readonly loading: boolean;
}
