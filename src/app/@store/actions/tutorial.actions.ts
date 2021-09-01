import { Action } from '@ngrx/store'
import { Tutorial } from 'src/app/@shared/models/tutorial.model'

// Section 1
export enum TutorialActionTypes {
  ADD_TUTORIAL       = '[TUTORIAL] Add',
  REMOVE_TUTORIAL    = '[TUTORIAL] Remove'
}
// Section 2
export class AddTutorial implements Action {
    readonly type = TutorialActionTypes.ADD_TUTORIAL

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = TutorialActionTypes.REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

// Section 3
export type TutorialActions = AddTutorial | RemoveTutorial
