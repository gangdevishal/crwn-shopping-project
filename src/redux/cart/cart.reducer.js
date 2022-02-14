import { cartActionType } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItem: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartActionType.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case cartActionType.ADD_CART_ITEMS:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, payload),
      };
    case cartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
