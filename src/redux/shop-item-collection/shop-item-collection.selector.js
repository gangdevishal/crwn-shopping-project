import { createSelector } from "reselect";

const selectItemCollection = (state) => state.collections;

export const selectShopItemCollection = createSelector(
  [selectItemCollection],
  (collections) => collections.itemCollection
);
