const { createSelector } = require("reselect");

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItem
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItem) =>
    cartItem.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItem) =>
    cartItem.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);

export const hidden = createSelector([selectCart], (cart) => cart.hidden);
