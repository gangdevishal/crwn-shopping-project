import { cartActionType } from "./cart.types";

export const toggleCart = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
  type: cartActionType.ADD_CART_ITEMS,
  payload: item,
});
