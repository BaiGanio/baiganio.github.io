import { Action } from '@ngrx/store'
import { Tutorial } from 'src/app/@shared/models/tutorial.model';
import { TutorialActionTypes, TutorialActions } from '../actions/tutorial.actions';

// Section 1
const initialState: Tutorial[] = [{
    name: 'Initial Tutorial State',
    url: 'http://google.com'
}]

// Section 2
export function tutorialReducer(state: Tutorial[] = initialState, action: TutorialActions) {

    // Section 3
    switch(action.type) {
        case TutorialActionTypes.ADD_TUTORIAL:
            return [...state, action.payload];

        case TutorialActionTypes.REMOVE_TUTORIAL:
            let newState = [...state];
            newState.splice(action.payload, 1);
            return newState;
        default:
          return state;
    }
}
