import { createSelector } from 'reselect';

//creating inputSelector, a function gets whole state and only return a slice of it
const selectCart = state => state.cart;

//output selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

//memoized selector 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

// import { createSelector } from 'reselect';

// const selectCart = state => state.cart;

// export const selectCartItems = createSelector(
//     [selectCart],
//     cart => cart.cartItems
// );

// export const selectCartItemsCount = createSelector(
//     [selectCartItems],
//     cartItems =>
//         cartItems.reduce(
//             (accumalatedQuantity, cartItem) =>
//                 accumalatedQuantity + cartItem.quantity,
//             0
//         )
// );