import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { UserView } from "src/app/@modules/users/models/user-view";
import { InitializeUserAction, SelectUserAction } from "../actions/user.actions";
import { fetchUser } from "../selectors/user.selector";

@Injectable()
export class UserStoreFacadeService {
    constructor(private store: Store<{}>) { }

    public get userByToken() {
        return {
            getUserByToken: (user: UserView) => this.store.dispatch(new InitializeUserAction(user)),
            getByToken$: this.store.select(select(fetchUser))
        }
    }

    // public get downloadPdfForMessage() {
    //     return {
    //         generatePdfForMessage: (messageId: string, subject: string) => this.store.dispatch(new fromActions.GeneratePdfForMessageRequestAction({
    //             messageId,
    //             subject
    //         }))
    //     }
    // }

    public get cleanup() {
        return {
            cleanup: () => this.store.dispatch(new fromActions.GetUserEmailCommunicationSuccessAction({
                userEmailCommunication: null
            }))
        }
    }
}
