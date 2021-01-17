import { createSelector } from 'reselect';

export const isLoggedInSelector = createSelector(
  (state: any) => state.auth.get('loggedIn'),
  (loggedIn) => loggedIn
);
