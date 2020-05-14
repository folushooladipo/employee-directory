import { createAction, props } from '@ngrx/store';

export const bookmarkEmployee = createAction(
    '[Bookmarked Employees] Add employee',
    props<{ payload: BriefEmployee }>()
);

export const unbookmarkEmployee = createAction(
    '[Bookmarked Employees] Remove employee',
    props<{ payload: { id: number } }>()
);

export const resetBookmarkedEmployees = createAction('[Bookmarked Employees] Remove all bookmarks');
