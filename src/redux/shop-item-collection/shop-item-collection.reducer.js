import SHOP_DATA from "../../pages/shoppage/shop.data";
import { shopActionType } from "./shop-item-collection.types";

const initialState = {
  collections: null
};

export const itemCollectionReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case shopActionType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };
    default:
      return state;
  }
};
