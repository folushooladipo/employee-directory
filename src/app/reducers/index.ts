import { ActionReducerMap } from '@ngrx/store';

import { bookmarkedEmployeesReducer } from './bookmarkedEmployeesReducer';

export const reducers: ActionReducerMap<IRootState> = {
  bookmarkedEmployees: bookmarkedEmployeesReducer
};
