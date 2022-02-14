import { createSelector } from "reselect";

const selectCurrentUser = state => state.user;

export const currentUser = createSelector(
    [selectCurrentUser],
    (user) => user.currentUser
)