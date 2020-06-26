//Utility functions allow us to keep our files clean and organize functions that we may need
//  in multiple fules in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
    //.find() returns the object found else return undefined
    const exisitngCartItem = cartItems.find(
        cartItem => (cartItem.id === cartItemToAdd.id)
    );

    //return a new state
    if (exisitngCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItems
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};