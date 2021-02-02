import { createAction, props } from '@ngrx/store';

export const addBlogger = createAction(
  '[Bloggers List] Add Blogger',
  props<{ bloggerId }>()
);

export const removeBlogger = createAction(
  '[Bloggers Collection] Remove Blogger',
  props<{ bloggerId }>()
);

export const getBloggersList = createAction(
  '[Bloggers List/API] Retrieve Bloggers Success',
  props<{ Blogger }>()
);