import { createSelector } from "reselect";

//  ADA 2 TIPE :
//    1. INPUT SELECTOR
const selectCart = state => state.cart;

//    2. OUTPUT SELECTOR
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartIsHidden = createSelector(
  [selectCart],
  cart => cart.isHidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
