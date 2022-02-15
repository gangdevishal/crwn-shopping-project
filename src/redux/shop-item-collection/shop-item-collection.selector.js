import { createSelector } from "reselect";

const selectItemCollection = (state) => state.collections;

const COLLECTION_ID_MAP = {
  winterwear: 2,
  men: 3,
  womens: 4,
  beauty_health: 5,
  kids: 6,
  begs_bootwear: 7,
  jewellery: 8,
  electronics: 9,
  sports_fitness: 10,
  food_drinks: 11,
};

export const selectShopItemCollection = createSelector(
  [selectItemCollection],
  (collections) => collections.itemCollection
);

export const selectShopItemCollectionCategory = (collectionUrlParam) =>
  createSelector([selectShopItemCollection], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
