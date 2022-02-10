import { cartActionType } from "./cart.types";

const initialState = {
  hidden: true,
};

export const cartReducer = (state = initialState, { type }) => {
  switch (type) {
    case cartActionType.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};
