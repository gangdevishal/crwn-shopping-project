import { createSelector } from 'reselect';

const selectItemCollection = state => state.shop;

export const selectShopItemCollection = createSelector(
  [selectItemCollection],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItemCollection],
  collections =>collections ?  Object.keys(collections).map(key => collections[key]) : []
);

export const selectShopItemCollectionCategory = collectionUrlParam =>
  createSelector(
    [selectShopItemCollection],
    collections => collections ?  collections[collectionUrlParam]: null
  );









