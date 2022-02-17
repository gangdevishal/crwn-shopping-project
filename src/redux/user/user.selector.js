import { createSelector } from "reselect";

const selectCurrentUser = state => state.user;

export const currentSelectedUser = createSelector(
    [selectCurrentUser],
    (user) => user.currentUser
)