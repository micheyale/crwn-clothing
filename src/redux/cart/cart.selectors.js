import { createSelector } from 'reselect';

//creating inputSelector, a function gets whole state and only return a slice of it
const selectCart = state => state.cart;

//output selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

//selector for Hidden
export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

//memoized selector 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
);