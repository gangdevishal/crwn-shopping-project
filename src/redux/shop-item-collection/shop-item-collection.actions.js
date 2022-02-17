import { shopActionType } from "./shop-item-collection.types";

export const updateCollections = (collectionsMap) => ({
  type: shopActionType.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
