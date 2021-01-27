import { UserView } from '../../users/models/user-view';

export class DashboardPreviewModel {

    CoursesCount: number;
    SubscriptionsCount: number;

    constructor(coursesCount: number, subscriptionsCount: number) {
        this.CoursesCount = coursesCount;
        this.SubscriptionsCount = subscriptionsCount;
    }
}
