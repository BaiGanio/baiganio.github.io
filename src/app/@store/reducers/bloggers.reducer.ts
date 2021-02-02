import { createReducer, on, Action } from '@ngrx/store';

import { getBloggersList } from '../actions/bloggers.actions';
import { Blogger } from '../../@modules/bloggers/models/blogger.model';

export const initialState: ReadonlyArray<Blogger> = [];

export const bloggersReducer = createReducer(
  initialState,
  on(getBloggersList, (state, { Blogger }) => [...Blogger])
);