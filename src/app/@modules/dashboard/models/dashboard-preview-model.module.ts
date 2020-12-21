import { UserViewModel } from '../../users/models/user-view-model.module';

export class DashboardPreviewModel {

    CoursesCount: number;
    SubscriptionsCount: number;

    constructor(coursesCount: number, subscriptionsCount: number) {
        this.CoursesCount = coursesCount;
        this.SubscriptionsCount = subscriptionsCount;
    }
}
