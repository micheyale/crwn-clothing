import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


const mapStateToProps = (state) => ({
    //reduce function brings an array of values down to one
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);


// import React from 'react';
// import { connect } from 'react-redux';

// import { toggleCartHidden } from '../../redux/cart/cart.actions';

// import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

// import './cart-icon.styles.scss';

// const CartIcon = ({ toggleCartHidden, itemCount }) => (
//     <div className='cart-icon' onClick={toggleCartHidden}>
//         <ShoppingIcon className='shopping-icon' />
//         <span className='item-count'>{itemCount}</span>
//     </div>
// );

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount: cartItems.reduce((accumulatdQuantity, cartItem) => accumulatdQuantity + cartItem.quantity, 0)
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CartIcon);