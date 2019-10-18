import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectSession = createSelector([selectDirectory], directory => directory.sessions);





